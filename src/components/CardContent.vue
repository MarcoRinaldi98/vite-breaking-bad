<script>
export default {
    name: "CardContent",
    props: {
        image: Array,
        name: String,
        type: String
    }
}
</script>

<template>
    <div class="text-center">
        <img :src="image[0].image_url" :alt="name" />
        <h3 class="py-3">{{ name }}</h3>
        <h5>{{ type }}</h5>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables';
@use '../styles/partials/mixins';

img {
    width: 100%;
}

h3 {
    color: variables.$color-white;
    font-size: 18px;
    text-transform: uppercase;
}
</style>