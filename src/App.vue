<template>
  <LoadingScreen />
  <header>
    <AppHeader />
  </header>

  <main>
    <AppSearch @doChange="getCards" />
    <CardList />
  </main>
</template>

<script>
import axios from 'axios';

import { store } from './store.js';

import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CardList from './components/CardList.vue';
import LoadingScreen from './components/LoadingScreen.vue';

export default {
  components: {
    AppHeader,
    AppSearch,
    CardList,
    LoadingScreen
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      console.log(store.search);

      let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0';

      switch (store.search) {
        case '1':
          urlApi += `&archetype=Alien`;
          break;
        case '2':
          urlApi += `&archetype=Umi`;
          break;
        case '3':
          urlApi += `&archetype=Melodious`;
          break;
        case '4':
          urlApi += `&archetype=ABC`;
          break;
        case '5':
          urlApi += `&archetype=Rokket`;
          break;
        case '6':
          urlApi += `&archetype=Mermail`;
          break;
      }

      axios.get(urlApi)
        .then(response => {
          this.store.cardList = response.data.data;
          this.store.loading = false;
        })
        .catch(err => {
          console.log(err.message);
          this.store.cardList = [];
          this.store.loading = false;
          console.log('La ricerca non ha dato risultati');
        })
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
