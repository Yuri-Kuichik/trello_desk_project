<script setup>
import { ref, provide, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useRootStore } from './stores/root'
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()
rootStore.getDataColumns()
rootStore.getDataUser()

const { user, columns } = storeToRefs(rootStore)
provide('dataColumns', columns)
provide('dataUser', user)

const isLogged = ref(false)
isLogged.value = rootStore.getIsLoggedIn()

watch(
  columns, 
  (data) => {
    rootStore.$state = { columns: data }
    
    rootStore.setColumnsToLocalStorage(data)
  },
  { deep: true }
)

rootStore.$subscribe((mutation, state) => {
  rootStore.setStateToLocalStorage(state)
})

</script>

<template>
  <div class="app-view" v-cloak>
    <RouterView />
  </div>
</template>

<style lang="scss">
.app-view {
  min-height: 100%;
}

</style>
