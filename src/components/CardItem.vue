<script setup>
import { defineProps, ref, defineEmits } from 'vue';

import CardProgressBar from './CardProgressBar.vue';
import CardFooter from './CardFooter.vue';
import ModalBox from './ModalBox.vue'

const isOpenModal = ref(false)

const emit = defineEmits(['addCard'])

const props = defineProps({
    model: {
        type: Object,
        default: () => ({
            id: null,
            title: '',
            description: '',
            progress: [
                {speed: 6}
            ],
            image: ''
        })
    },
    newCard: {
        type: Boolean,
        default: false
    },
    isDraggable: {
        type: Boolean,
        default: false
    }
});

const dataCard = ref(props.model)

const openModal = () => {
    isOpenModal.value = true
}

const addCard = () => {
    emit('add-card', dataCard.value)
    isOpenModal.value = false
};

</script>

<template>
    <div v-if="newCard" @click="openModal" class="card-item card-item_empty">
        <div>+ Add new card</div>
    </div>

    <div v-else class="card-item" @click="openModal">
        <div v-if="model.image" class="card-item__image">
            <img alt="card image" :src="model.image" />
        </div>

        <div>
            <CardProgressBar :progress="model.progress"/>
            <div class="card-item__title">
                <div v-if="isDraggable" class="drag-handle l-box_inline l-box_aic">
                    <img alt="draggable icon" src="@/assets/icons/drag.svg" />
                </div>
                <div>
                    {{ model.title }}
                </div>
            </div>
            <div v-if="model.description" class="card-item__description sh-p2">
                {{ model.description }}
            </div>
            
        </div>

        <CardFooter :users-img="model?.users" />
    </div>

    <ModalBox :open="isOpenModal" @close="isOpenModal=false">
        <div class="modal-box">
            <h3>{{ newCard ? 'Create card' : 'Edit card' }}</h3>

            <div class="l-box l-box_fdc">
                <span class="sh-p3">Title:</span>
                <input class="sh-p1" v-model="dataCard.title" placeholder="Write the theme of the card" />
            </div>
            <br/>

            <div class="l-box l-box_fdc">
                <span class="sh-p3">Description:</span>
                <textarea class="sh-p1" v-model="dataCard.description" placeholder="Write the description of the card"></textarea>
            </div>
            <br/>

            <div class="l-box l-box_fdc">
                <span class="sh-p3">Image:</span>
                <input class="sh-p1" v-model="dataCard.image" placeholder="Enter url picture" />
            </div>
            <br/>

            <div class="l-box buttons">
                <button class="btn l-box l-box_jcc" @click="isOpenModal = false" >Close</button>
                <button v-if="newCard" class="btn btn_blue l-box l-box_jcc" @click="addCard">Add card</button>
            </div>
        </div>
    </ModalBox>
   
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
        display: flex;
        gap: 8px;
        margin-top: 6px;
    }

    .drag-handle {
        img { 
            pointer-events: none; 
        }
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

.buttons {
    display: flex;
    gap: 12px;  

    .btn {
        padding: 10px 0;
        border-radius: 8px;
        background-color: rgba(0,0,0, .2); 

        &:hover {
            opacity: 0.9;
        } 
    }

        .btn_blue {
        color: #FFFFFF;
        background-color: #0075FF;
    }
}

</style>