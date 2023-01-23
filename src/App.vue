<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
  export default {
    components: {
      AppHeader,
		AppFooter
    }
  }
</script>

<template>
  <AppHeader />
  <AppFooter />
</template>

<style lang="scss">
  @use './scss/generals.scss' as *;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
</style>