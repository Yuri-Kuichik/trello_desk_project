<script setup>
import {ref, defineProps} from 'vue'

defineProps ({
    usersImg: {
        type: Array,
        default: () => ([])
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

const plusUser = () => [
    // do something
]

</script>

<template>
    <div class="card-footer">
        <div class="card-footer__users">
            <div class="card-footer__user-wrapper" v-for="(item, index) in usersImg" :key="index" >
                <div v-if="index < 4" class="user-img" :style="`background-image: url(${usersImg[index]})`"></div>
            </div>
            
            <div @click.stop="plusUser" class="user-img user-img_plus l-box_inline l-box_aic l-box_jcc">+</div>
        </div>

        <div class="card-footer__icons">
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
</template>

<style lang="scss" scoped>
.card-footer {
    display: flex;
    justify-content: space-between;
    padding-top: 8px;

    &__users {
        display: flex;

        .user-img {
            background-size: contain;
            background-repeat: no-repeat;
            height: 30px;
            width: 30px;

            &:not(:first-child) {
                margin-left: -13px;
            }

            &_plus {
                background-color: rgb(0,0,0);
                color: #FFFFFF;
                border-radius: 50%;
            }
        }
    }

    &__user-wrapper {
        &:not(:first-child) {
                margin-left: -13px;
            }
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
        padding-top: 11px;

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