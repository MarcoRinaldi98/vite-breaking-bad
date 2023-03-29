<script>
import { store } from '../store.js';

export default {
    name: "LoadingScreen",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="loading" v-if="store.loading">
        <h1>Caricamento in corso... attendi!</h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables';
@use '../styles/partials/mixins';

.loading {
    background-color: variables.$bg-color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include mixins.d-flex-center;
}
</style>