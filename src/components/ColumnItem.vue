<script setup>
import { defineProps, ref, watch } from 'vue';
import { useRootStore } from '@/stores/root';

import draggable from 'vuedraggable'
import CardItem from './CardItem.vue';

const rootStore = useRootStore()

const props = defineProps({
    model: {
        type: Object,
        default: () => ({})
    },
    columnIndex: {
        type: Number
    }
})

const dataCards = ref(props.model.cards);
const drag = ref(false);
const canDraggable = ref(true)

const addCard = (card) => {
    rootStore.addCardToColumn(props.columnIndex, card)
}

watch( dataCards, (newData) => {
    console.log('ColumnItem component -> mwatch dataCards -> newData: ', newData)
    rootStore.updateColumn(props.columnIndex, newData)
})

</script>

<template>
    <div class="column-item">
        <div class="column-item__header l-box l-box_jcsb">
            <div class="sh-p1_col">{{ model.name }}</div>
            <button class="l-box_inline l-box_aic" @click="canDraggable = !canDraggable">
                <img src="@/assets/icons/dots.svg" />
            </button>
        </div>

        <draggable 
            class="column-item__cards"
            v-model="dataCards" 
            group="cards" 
            handle=".drag-handle"
            :animation="100"
            @start="drag = true" 
            @end="drag = false" 
            item-key="id"
        >
            <template #item="{element}">
                <div>
                    <CardItem :model="element" :is-draggable="canDraggable"/>
                </div> 
            </template>

            <template #footer>
                <CardItem new-card @add-card="addCard" />
            </template>
        </draggable>
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

    &__cards {
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