<script setup>
import { defineProps } from 'vue';
import ColumnItem from './ColumnItem.vue';

const props = defineProps({
    columns: {
        type: Object,
        default: () => ({})
    }
})

</script>

<template>
    <div class="column-list">
        <div class="column-list__wrapper">
            <ColumnItem 
            v-for="item in columns"
            :key="item.id"
            :model="item"
            />
        </div>
    </div>
</template>

<style lang="scss">
.column-list {
    overflow-x: auto;

    &__wrapper {
        display: flex; 
        gap: 16px;
    }

    @media (min-width: 770px) {
        gap: 30px;
    }
} 

</style>