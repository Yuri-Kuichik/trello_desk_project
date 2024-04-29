<script setup>
import {ref} from 'vue'

const users = ref([
    'https://lh3.googleusercontent.com/drive-viewer/AKGpihatFeKCudLeeDUuB9cUsfTY-smFzF95y0GVfvaKjetoQgxRSRMsCu8hen1zfj_2P4XQj-F8Ja5dCWS6ENMWZ6cs3RLrLhoIQJ4=s2560',
    'https://lh3.googleusercontent.com/drive-viewer/AKGpihatFeKCudLeeDUuB9cUsfTY-smFzF95y0GVfvaKjetoQgxRSRMsCu8hen1zfj_2P4XQj-F8Ja5dCWS6ENMWZ6cs3RLrLhoIQJ4=s2560',
    'https://lh3.googleusercontent.com/drive-viewer/AKGpihatFeKCudLeeDUuB9cUsfTY-smFzF95y0GVfvaKjetoQgxRSRMsCu8hen1zfj_2P4XQj-F8Ja5dCWS6ENMWZ6cs3RLrLhoIQJ4=s2560',
    'https://lh3.googleusercontent.com/drive-viewer/AKGpihatFeKCudLeeDUuB9cUsfTY-smFzF95y0GVfvaKjetoQgxRSRMsCu8hen1zfj_2P4XQj-F8Ja5dCWS6ENMWZ6cs3RLrLhoIQJ4=s2560',
    'https://lh3.googleusercontent.com/drive-viewer/AKGpihatFeKCudLeeDUuB9cUsfTY-smFzF95y0GVfvaKjetoQgxRSRMsCu8hen1zfj_2P4XQj-F8Ja5dCWS6ENMWZ6cs3RLrLhoIQJ4=s2560',
    'https://lh3.googleusercontent.com/drive-viewer/AKGpihatFeKCudLeeDUuB9cUsfTY-smFzF95y0GVfvaKjetoQgxRSRMsCu8hen1zfj_2P4XQj-F8Ja5dCWS6ENMWZ6cs3RLrLhoIQJ4=s2560'
])

const plusUser = () => [
    // do something
]
</script>

<template>
    <div class="nav-section">
        <div class="nav-section__title">Brackets</div>
        <div class="l-box l-box_jcsb l-box_aic">
            <div class="nav-section__icons">
                <img alt="heart icon" src="/src/assets/icons/heart-outline.svg" />
                <div class="nav-section__icon-globe">
                    <img alt="heart icon" src="/src/assets/icons/globe-outline.svg" />
                    <span>Public</span>
                </div>
                <img alt="heart icon" src="/src/assets/icons/hard.svg" />
            </div>

            <div class="l-box_inline l-box_aic">
                <div class="nav-section__users">
                    <div class="nav-section__user-wrapper" v-for="(item, index) in users" :key="index" >
                        <div v-if="index < 5" class="user-img" :style="`background-image: url(${users[index]})`"></div>
                    </div>
                    <div @click.stop="plusUser" class="user-img user-img_plus l-box_inline l-box_aic l-box_jcc">+44</div>
                </div>
                <div class="nav-section__menu">Menu</div>
            </div>
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
.nav-section {
    display: flex;
    flex-direction: column;
    gap: 9px;
    font-weight: 500;

    &__icons {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--color-text-light);
        cursor: pointer;

        img {
            width: 16px;
            height: 16px;
        }
    }

    &__icon-globe {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 6px;
        border-left: solid 1px var(--color-border-light);
        border-right: solid 1px var(--color-border-light);
    }

    &__users {
        display: flex;
        margin-right: 10px;
        cursor: pointer;

        .user-img {
            background-size: contain;
            background-repeat: no-repeat;
            height: 30px;
            width: 30px;

            &:not(:first-child) {
                margin-left: -15px;
            }

            &_plus {
                background-color: rgb(0,0,0);
                color: #FFFFFF;
                border-radius: 50%;
                font-size: 10px;
                line-height: 1.5;
            }
        }
    }

    &__menu {
        cursor: pointer;
    }

    &__user-wrapper {
        &:not(:first-child) {
            margin-left: -15px;
        }
    }

    @media (min-width: 770px) {
        flex-direction: row;
        gap: 90px;

        &__title {
            font-size: 26px;
            line-height: 1.5;
        }

        &__icons {
            gap: 10px;
            font-size: 18px;
            line-height: 27px;

            img {
            width: 19px;
            height: 19px;
        }
        }

        &__icon-globe {
            gap: 4px;
        }

        &__menu {
            font-size: 20px;
            line-height: 1.5;
        }

        &__users {
            margin-right: 100px;

            .user-img {
                height: 40px;
                width: 40px;

                &:not(:first-child) {
                    margin-left: -20px;
                }
            }

            .user-img_plus {
                font-size: 12px;
            }
        }
        
        &__user-wrapper {
            &:not(:first-child) {
                margin-left: -20px;
            }
        }
    }
}

</style>