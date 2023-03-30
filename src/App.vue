<template>
  <LoadingScreen />
  <header>
    <AppHeader />
  </header>

  <main>
    <AppSearch @doChange="getSelectedArchetypeCard" />
    <ResultMessage />
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
import ResultMessage from './components/ResultMessage.vue';

export default {
  components: {
    AppHeader,
    AppSearch,
    CardList,
    LoadingScreen,
    ResultMessage
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0')
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
    },
    getAllArchetype() {
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
        .then(response => {
          this.store.allArchetype = response.data;
        })
    },
    getSelectedArchetypeCard() {
      if (store.search == '') {
        this.getCards();
      } else {
        let urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

        urlApi += `?archetype=${this.store.search}`;

        axios.get(urlApi)
          .then(response => {
            this.store.cardList = response.data.data;
          })
      }
    }
  },
  created() {
    this.getCards();
    this.getAllArchetype();
  }

}
</script>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
