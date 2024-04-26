<script setup>
import { defineProps } from 'vue';

import CardProgressBar from './CardProgressBar.vue';

defineProps({
    model: {
        type: Object,
        default: () => ({speed: 6})
    },
    newCard: {
        type: Boolean,
        drfault: false
    }
})

const getRandomInt = () => {
    return Math.floor(Math.random() * 100);
}

const addMassage = () => {
    // do something
}

const noteLikeCard = () => {
    // do something
}

const attachFile = () => {
    // do something
}

const addCard = () => {
    alert('addCard');
}

const editCard = () => {
    alert('editCard');
}

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

       
        <div class="card-item__footer">
            <div class="card-item__users">users</div>

            <div class="card-item__icons">
                <div class="l-box_inline l-box_aic" @click.stop="addMassage">
                    <span class="sh-p3">{{ getRandomInt() }}</span>
                    <img alt="message icon" src="/src/assets/icons/message-square-outline.svg" />
                </div>
                <div class="l-box_inline l-box_aic" @click.stop="noteLikeCard">
                    <span class="sh-p3">{{ getRandomInt() }}</span>
                    <img alt="heart icon" src="/src/assets/icons/heart-outline.svg" />
                </div>
                <div class="l-box_inline l-box_aic" @click.stop="attachFile">
                    <span class="sh-p3">{{ getRandomInt() }}</span>
                    <img alt="attach icon" src="/src/assets/icons/attach-outline.svg" />
                </div>
            </div>
        </div>
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

    &__footer {
        display: flex;
        justify-content: space-between;
        padding-top: 8px;
    }

    &__icons {
        display: flex;
        justify-content: space-between;
        width: 122px;
        color: var(--color-text-light);

        img {
            height: 16px;
            width: 16px;
            margin-left: 1px;
        }
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

        &__footer {
            padding-top: 11px;
        }

        &__icons {
            width: 152px;

            img {
            height: 20px;
            width: 20px;
            margin-left: 1px;
        }
        }
    }
}

</style>