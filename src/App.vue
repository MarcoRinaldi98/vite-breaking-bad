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
import axios from 'axios';

import { store } from './store.js';

import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CardList from './components/CardList.vue';

export default {
  components: {
    AppHeader,
    AppSearch,
    CardList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        .then(response => {
          this.store.cardList = response.data.data;
        });
    }
  },
  created() {
    this.getCards();
  }

}
</script>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
