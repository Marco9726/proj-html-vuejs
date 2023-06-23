<script>
import CardMovie from './CardMovie.vue';
export default {
   props: {
      categorySelected: String,
   },
   components: {
      CardMovie,
   },
   data() {
      return {
         movieCardsArray: [
            {
               title: 'Hurry Animate Blue Strack New Movie',
               category: 'Top Rating',
               finalPath: '1.jpg',
               views: 381,
               stars: 0,
               time: '2.30.00',
               release: 'February 12, 2016',
               genres: 'Drama, Action Releas',
            },
            {
               title: 'Animate Blue Strack New Movie',
               category: 'Latest Movie',
               finalPath: '5-1.jpg',
               views: 344,
               stars: 0,
               time: '2.30.00',
               release: 'February 12, 2016',
               genres: 'Drama, Action Releas',
            },
            {
               title: 'Blue Strack New Animate Movie',
               category: 'Coming Soon',
               finalPath: '3.jpg',
               views: 420,
               stars: 0,
               time: '2.30.00',
               release: 'February 12, 2016',
               genres: 'Drama, Action Releas',
            },
            {
               title: 'Nulla Strack New Animate Movie',
               category: 'TV Series',
               finalPath: '4.jpg',
               views: 325,
               stars: 0,
               time: '2.30.00',
               release: 'February 12, 2016',
               genres: 'Drama, Action Releas',
            },
            {
               title: 'Quisque In Strack New Movie',
               category: 'Top Rating',
               finalPath: '3-222x300.jpg',
               views: 340,
               stars: 1,
               time: '2.30.00',
               release: 'February 12, 2016',
               genres: 'Drama, Action Releas',
            },
            {
               title: 'New Movie Quisque In Strack',
               category: 'Latest Movie',
               finalPath: '2.jpg',
               views: 503,
               stars: 0,
               time: '2.30.00',
               release: 'February 12, 2016',
               genres: 'Drama, Action Releas',
            },
         ],
      };
   },
   computed: {
      // metodo per filtrare l'array in base alla categoria selezionata
      availableMovies() {
         // se non è vera la categoria o se è uguale a 'All', restituisco l'array originale
         if (!this.categorySelected || this.categorySelected === 'All') {
            return this.movieCardsArray;
         }
         // altrimenti filtro l'array solo con gli oggetti che hanno la categoria uguale a quella selezionata
         return this.movieCardsArray.filter(
            (item) => item.category === this.categorySelected
         );
      },
   },
};
</script>

<template>
   <div class="d-flex flex-wrap">
      <!-- ciclo gli oggetti dell'array della funziona avaibleMovies e passo l'oggetto (card) come prop alla componente CardMovie  -->
      <CardMovie
         v-for="(item, index) in availableMovies"
         :key="index"
         :card="item"
      />
   </div>
</template>

<style lang="scss">
@use '../scss/generals.scss' as *;
</style>
