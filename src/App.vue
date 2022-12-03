
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Navbar />
  <Header />
  <FourSteps />

  <!-- <router-view /> -->
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import FourSteps from './components/FourSteps.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    FourSteps
  }
}
</script>

<style>

</style>
