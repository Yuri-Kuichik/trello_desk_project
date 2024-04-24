<script setup>
import { RouterView } from 'vue-router'
import BarSection from './components/BarSection.vue';
</script>

<template>
  <div class="app-view" v-cloak>
    <BarSection/>
    <RouterView />
  </div>
</template>

<style>
.app-view {
  min-height: 100%;
}

</style>
