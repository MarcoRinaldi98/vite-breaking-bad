<script>
import { store } from '../store.js';

import CardContent from './CardContent.vue';

export default {
    name: "CardList",
    components: {
        CardContent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section id="content" class="ms_container">
        <div class="bg-white p-5">
            <div class="counter col-12">
                <h4>{{ 'Found ' + store.cardList.length + ' cards' }}</h4>
            </div>
            <div class="ms_display">
                <div class="ms_card" v-for="(card, index) in store.cardList">
                    <CardContent :image="card.card_images" :name="card.name" :type="card.archetype" :key="index" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables';
@use '../styles/partials/mixins';

.ms_container {
    @include mixins.contenitore;
    background-color: variables.$color-white;

    .counter {
        height: 100px;
        width: 100%;
        background-color: variables.$color-secondary;
        display: flex;
        align-items: center;

        h4 {
            color: variables.$color-white;
            padding-left: 10px;
            font-size: 20px;
            font-weight: bold;
        }
    }

    .ms_display {
        display: flex;
        flex-wrap: wrap;

        .ms_card {
            background-color: variables.$bg-color;
            width: calc(100% / 5 - 20px);
            margin: 10px;
        }
    }
}
</style>