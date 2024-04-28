<script setup>
import { defineProps } from 'vue';

defineProps({
    open: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <Teleport to="#modal">
    <div v-if="open" class="modal">
        <div class="modal__wrapper">
            <div class="modal__content">
                <slot></slot>
            </div>    
        </div>
    </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    transition: background 0.1s;    

    &__wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100%;
    }

    &__content {
        padding: 24px;
        overflow: hidden;
        height: auto;
        width: auto;
        min-width: 250px;
        background: var(--color-background);
        border-radius: 12px;

        @media (min-width: 770px) {
            padding: 32px;
            min-width: 420px; 
        }
    }
}

</style> 