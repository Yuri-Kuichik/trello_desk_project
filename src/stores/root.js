import { defineStore } from 'pinia'
import defaultDataState from '@/assets/defaultDataState';

const ROOT_STATE_KEY = 'root_state';
const ROOT_STATE_COLUMNS_KEY = 'root_state_columns';
const USER_IS_LOGGED_KEY = 'user_auth';

export const useRootStore = defineStore('root', {
  state: () => ({
    columns: []
  }),

  actions: {
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

    updateCard(idCard) {
      console.log('updateCard -> idCard: ', idCard);
      this.columns[0].cards[0].description = 'changed description from rootStore'
    },

    updateColumn(columnIndex, data) {
      console.log('updateColumn -> columnIndex, data: ', columnIndex, data);
      this.columns[columnIndex].cards = data
    }
  }

})
