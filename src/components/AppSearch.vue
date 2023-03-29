<script>
export default {
    name: "AppSearch"
}
</script>

<template>
    <div class="py-5 ps-1 ms_container">
        <div class="select-size">
            <select class="form-select" aria-label="Default select example">
                <option selected>All</option>
                <option value="1">Magia</option>
                <option value="2">Trappola</option>
                <option value="3">Mostro</option>
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables';

.ms_container {
    width: 1170px;
    margin: auto;
}

.select-size {
    width: 200px;
}
</style>