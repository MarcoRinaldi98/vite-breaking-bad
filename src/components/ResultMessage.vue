<script>
import { store } from '../store.js';

export default {
    name: 'ResultMessage',
    data() {
        return {
            store
        }
    },
    computed: {
        counter() {
            if (this.store.cardList.length > 0) {
                return `Found ${this.store.cardList.length} cards`;
            } else {
                return `Nessun risultato`;
            }
        }
    }
}
</script>

<template>
    <div class="ms_container">
        <div class="counter">
            <h4>{{ counter }}</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables';
@use '../styles/partials/mixins';

.ms_container {
    @include mixins.contenitore;

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
}
</style>