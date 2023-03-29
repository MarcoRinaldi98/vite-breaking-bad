<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppSearch />
    <CardList />
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CardList from './components/CardList.vue';

export default {
  components: {
    AppHeader,
    AppSearch,
    CardList
  }

}
</script>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
