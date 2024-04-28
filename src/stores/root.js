import { defineStore } from 'pinia'
import defaultDataState from '@/assets/defaultDataState';

const ROOT_STATE_KEY = 'root_state';
const ROOT_STATE_COLUMNS_KEY = 'root_state_columns';
const USER_IS_LOGGED_KEY = 'user_auth';

export const useRootStore = defineStore('root', {
  state: () => ({
    user: {},
    columns: []
  }),

  actions: {
    getDataUser() {
      this.user = defaultDataState.user
    },

    getDataColumns() {
      const data = this.getKeyLocalStorage(ROOT_STATE_COLUMNS_KEY)

      this.columns = data ? JSON.parse(data) : defaultDataState.columns
    },

    setStateToLocalStorage(data) {
      localStorage.setItem(ROOT_STATE_KEY, JSON.stringify(data))
    },

    setColumnsToLocalStorage(data) {
      localStorage.setItem(ROOT_STATE_COLUMNS_KEY, JSON.stringify(data))
    },

    getKeyLocalStorage(key) {
      return localStorage.getItem(key)
    },

    getIsLoggedIn() {
      const res = localStorage.getItem(USER_IS_LOGGED_KEY)
      return res && res === 'true'
    },

    updateColumn(columnIndex, data) {
      this.columns[columnIndex].cards = data
    },

    addCardToColumn(columnIndex, card) {
      card.id = this.getIdForNewCards()
      this.columns[columnIndex].cards.push(card)
    },

    getIdForNewCards() {
      let allCards = this.columns.reduce((sum, column) => {
        return sum + column.cards.length
      }, 0);
      
      return allCards + 1
    }
  }

})
