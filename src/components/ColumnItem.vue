<script setup>
import { inject, defineProps } from 'vue'
import { useRootStore } from '../stores/root';

const rootStore = useRootStore()

const props = defineProps({
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

        <div class="column-item__cards" @click="rootStore.addItemToColumns">{{ model.id }}</div>
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