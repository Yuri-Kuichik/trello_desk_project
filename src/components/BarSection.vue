<script setup>
import { ref } from 'vue'

const searchString = ref('');
 
const search = () => {
    console.log('request search ' + searchString.value);
}

const plus = () => {
    console.log('some plus acftion');
}

const alert = () => {
    console.log('some alert acftion');
}

const bell = () => {
    console.log('some bell acftion');
}

</script>

<template>
    <header class="bar-section">
        <div class="bar-section__wrapper">
            <RouterLink to="/">
                <img alt="Trello logo" class="sh-mq_d" src="@/assets/logo.svg" width="76" height="30" />
            </RouterLink>
            
            <div class="bar-section__boards"> 
                <RouterLink to="/about" class="bar-section__boards-link">
                    <img class="bar-section__boards-image" alt="search icon" src="@/assets/icons/trello-mark-blue.svg" />
                    <span class="sh-mq_d">Boards</span>
                </RouterLink>
            </div>

            <div class="bar-section__search-wrapper">
                <button class="sh-mq_m" @click="search">
                    <img alt="search icon" src="@/assets/icons/search-mob-outline.svg" width="20" height="20" />
                </button>

                <div class="bar-section__search sh-mq_d">
                    <input 
                        v-model="searchString"
                        @keypress.enter="search"
                    />
                    <button @click="search">
                        <img alt="search icon" src="@/assets/icons/search-outline.svg" width="16" height="16" />
                    </button>
                </div>
            </div>
        
            <div class="bar-section__actions">
                <button @click="plus">
                    <img alt="search icon" src="@/assets/icons/plus-circle-outline.svg" width="20" height="20" />
                </button>
                <button @click="alert">
                    <img alt="search icon" src="@/assets/icons/alert-circle-outline.svg" width="20" height="20" />
                </button>
                <button @click="bell">
                    <img alt="search icon" src="@/assets/icons/bell-outline.svg" width="20" height="20" />
                </button>
            </div>
            <img alt="user image" class="bar-section__user" src="@/assets/img/user.png"/>
        </div>

        <div class="bar-section__divider"></div>
    </header>

   
</template>

<style lang="scss" scoped>
    .bar-section {
        height: var(--heigth-mob-bar-section);

        &__wrapper {
            display: flex;
            align-items: center;
            padding: 0 16px;
            height: 100%;
        }
        

        a {
            color: var(--color-text);
            text-decoration: none;
        }

        &__boards {
            margin-right: 7px;
        }

        &__boards-link {
            display: inline-flex;
            gap: 5px;
        }

        &__boards-image {
            width: 30px;
            height: 30px;
        }

        &__search-wrapper {
            flex-grow: 1;
            display: flex;
        }

        &__search {
            flex-grow: 1;
            display: inline-flex;
            padding: 0 14px;
            height: 30px;
            max-width: 512px;
            background: var(--color-background-grey);
            border-radius: 15px;
            

            input {
                flex-grow: 1;
                border: none;
                outline: none;
                background: transparent;

                &:focus-visible {
                    border: none;
                }
            }
        }

        &__actions {
            display: inline-flex;
            justify-content: space-between;
            gap: 10px;
            margin-right: 10px;
            height: 20px;
            color: rgba(0,0,0, .2);
        } 

        &__user {
            height: 30px;
            width: 30px;
        }

        &__divider {
            height: 1px;
            background-color: var(--color-border);
        }

        @media (min-width: 770px) {
            height: var(--heigth-desk-bar-section);

            &__wrapper {
                padding: 0 30px;
            }

            &__boards {
                padding: 0 20px;
                margin: 0 20px;
                border-left: solid 1px var(--color-border);
                border-right: solid 1px var(--color-border);
            }

            &__boards-image {
                width: 24px;
                height: 24px;
            }

            &__actions {
                gap: 30px;
                margin: 0 30px;
            }

            &__user {
                height: 40px;
                width: 40px;
            }
        }
    }

    

</style>
