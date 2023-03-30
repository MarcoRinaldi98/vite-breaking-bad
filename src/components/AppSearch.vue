<script>
import { store } from '../store.js';

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="py-5 ps-1 ms_container">
        <div class="select-size">
            <select class="form-select" v-model="store.search" @change="$emit('doChange')">ù
                <option selected>All</option>
                <option value="1">Alien</option>
                <option value="2">Umi</option>
                <option value="3">Melodious</option>
                <option value="4">ABC</option>
                <option value="5">Rokket</option>
                <option value="6">Mermail</option>
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables';
@use '../styles/partials/mixins';

.ms_container {
    @include mixins.contenitore;

    .select-size {
        width: 200px;
    }
}
</style>