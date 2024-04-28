<script setup>
import {inject} from 'vue'

import BarSection from '@/components/BarSection.vue';
import ColumnItem from '@/components/ColumnItem.vue';
import NavSectiion from '@/components/NavSectiion.vue';

const columns = inject('dataColumns', []);

</script>

<template>
    <div class="home-page">
        <BarSection/>   

        <main>
            <!-- NavSection-->
            

            <div class="home-page__nav">
                <NavSectiion />
            </div>

            <div class="home-page__content">
                <div class="home-page__columns">
                    <div class="home-page__columns-wrapper">
                        <ColumnItem 
                            v-for="(item, index) in columns"
                            :key="item.id"
                            :model="item"
                            :column-index="index"
                        />
                    </div>
                </div>
            </div>
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

    &__content {
        flex-grow: 1;
        margin-bottom: 13px;
    }

    &__columns  {
        overflow-x: auto;
    }

    &__columns-wrapper {
        display: flex; 
        gap: 16px;
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

        &__content {
            margin-bottom: 16px;
        }

        &__columns {
            gap: 30px;
        }
    }
}
</style>