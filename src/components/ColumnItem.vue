<script setup>
import { defineProps } from 'vue'

import CardItem from './CardItem.vue';

defineProps({
    model: {
        type: Object,
        default: () => ({})
    }
})

</script>

<template>
    <div class="column-item">
        <div class="column-item__header l-box l-box_jcsb">
            <div class="sh-p1_col">{{ model.name }}</div>
            <button class="l-box_inline l-box_aic">
                <img src="@/assets/icons/dots.svg" />
            </button>
        </div>

        <div class="column-item__card-list">
            <CardItem 
                v-for="item in model.cards"
                :key="item.id"
                :model="item"
            />
            <CardItem new-card />
        </div>
    </div>
</template>

<style lang="scss">
.column-item {
    width: 288px;
    min-width: 288px;

    &__header {
        padding: 11px 16px;
        background: var(--color-background-grey);
        border-radius: 10px;
        margin-bottom: 10px;
        font-weight: 500;
    }

    &__card-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media (min-width: 770px) {
        width: 362px;
        min-width: 362px;

        &__header {
            padding: 13px 20px;
        }
    }
}

</style>