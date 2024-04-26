<script setup>
import {inject} from 'vue'

import BarSection from '@/components/BarSection.vue';
import ColumnList from '@/components/ColumnList.vue';

const columns = inject('dataColumns', []);

</script>

<template>
    <div class="home-page">
        <BarSection/>   

        <main>
            <!-- NavSection-->
            <div class="home-page__nav"> Nav section</div>

            <ColumnList class="home-page__list" v-if="columns.length" :columns="columns" />
        </main>
    </div>
    
</template>

<style lang="scss" scoped>
.home-page {
    main {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 0 16px;
        min-height: calc(100vh - var(--heigth-mob-bar-section));
    }

    &__nav {
        margin-top: 20px;
    }

    &__list {
        flex-grow: 1;
        margin-bottom: 13px;
    }

    @media (min-width: 770px) {
        main {
            gap: 15px;
            padding: 0 30px;
            min-height: calc(100vh - var(--heigth-desk-bar-section));
        }

        &__nav {
            margin-top: 30px;
        }

        &__list {
            margin-bottom: 16px;
        }
    }
}
</style>