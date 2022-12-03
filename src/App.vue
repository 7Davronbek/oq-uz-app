
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Navbar />
  <Header />

  <!-- <router-view /> -->
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header
  }
}
</script>

<style>

</style>
