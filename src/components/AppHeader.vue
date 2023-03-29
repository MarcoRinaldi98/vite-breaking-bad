<script>
export default {
    name: "AppHeader"
}
</script>

<template>
    <header class="d-flex align-items-center">
        <img src="/logo.png" alt="logo yu-gi-oh">
        <span class="fw-semibold">Yu-Gi-Oh Api</span>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables';

header {
    background-color: variables.$color-white;
    height: 100px;

    img {
        height: 60%;
        padding-left: 20px;
    }

    span {
        font-size: 50px;
    }
}
</style>