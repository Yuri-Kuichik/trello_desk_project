<script setup>
import { defineProps } from 'vue';

defineProps({
    progress: {
        type: Array,
        default: () => ([])
    }
})


</script>

<template>
    <div class="card-progress-bar" :class="rootClass">
        <div 
            v-for="(index) in 5" 
            :key="index"
            :class="`card-progress-bar_color-${progress[index-1] ? progress[index-1].speed : 0}`"
        ></div>
    </div>
</template>

<style lang="scss">
.card-progress-bar {
    display: flex;
    gap: 8px;

    div {
        height: 6px;
        width: 20%;
        border-radius: 3px; 
    }

    &_color-1 {
        background-color: #FF3838;
    }

    &_color-2 {
        background-color: #F8BD1C;
    }

    &_color-3 {
        background-color: #891BE8;
    }

    &_color-4 {
        background-color: #4339F2;
    }

    &_color-5 {
        background-color: #0AAAF4;
    }

    &_color-6 {
        background-color: #1AD698;
    }


    @media (min-width: 770px) {
        div {
            height: 8px;
            border-radius: 4px;
        } 
    }
    
}

</style>