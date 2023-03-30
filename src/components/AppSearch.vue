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
            <select class="form-select" v-model="store.search" @change="$emit('doChange')">
                <option value="" selected>All</option>
                <option v-for="(type, i) in store.allArchetype" :value="type.archetype_name" :key="i">{{ type.archetype_name
                }}
                </option>
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