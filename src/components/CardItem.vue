<script setup>
import { defineProps } from 'vue';
import { useRootStore } from '../stores/root';

import CardProgressBar from './CardProgressBar.vue';
import CardFooter from './CardFooter.vue';

const rootStore = useRootStore();

const props = defineProps({
    model: {
        type: Object,
        default: () => ({})
    },
    newCard: {
        type: Boolean,
        drfault: false
    }
});

const addCard = () => {
    alert('addCard');
    rootStore.updateCard(props.model.id)
};

const editCard = () => {
    alert('editCard')
};

</script>

<template>
    <div v-if="newCard" @click="addCard" class="card-item card-item_empty">
        <div>+ Add new card</div>
    </div>

    <div v-else class="card-item" @click="editCard">
        <div v-if="model.urlImage" class="card-item__image">
            <img alt="card image" :src="model.urlImage" />
        </div>

        <div>
            <CardProgressBar :progress="model.progress"/>
            <div class="card-item__title">
                {{ model.title }}
            </div>
            <div v-if="model.description" class="card-item__description sh-p2">
                {{ model.description }}
            </div>
        </div>

        <CardFooter />
    </div>
</template>

<style lang="scss">
.card-item {
    $this: &;

    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    background: var(--color-background-grey);
    border-radius: 10px;
    cursor: pointer;

    &#{$this}_empty {
        justify-content: center;
        align-items: center;
        height: 160px;
        background: transparent;
        border: 1px dashed var(--color-border-emphasis);
    }

    &__image  {
        height: 170px;
        border-radius: 9px;
        overflow: hidden;

        img {
            height: 100%;
            width: 100%;
            max-width: 100%;
            object-fit: cover;
        } 
    }

    &__title {
        margin-top: 6px;
    }

    &__description {
        margin-top: 2px;
        color: var(--color-text-medium);
    }

    @media (min-width: 770px) {
        gap: 16px;
        padding: 20px;

        &__title {
            margin-top: 9px;
        }

        &__description {
            margin-top: 3px;
        }
    }
}

</style>