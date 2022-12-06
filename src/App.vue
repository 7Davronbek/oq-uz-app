
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Navbar />
  <Header />
  <FourSteps />
  <AboutApp />
  <div class="vh-100"></div>

  <!-- <router-view /> -->
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import FourSteps from './components/FourSteps.vue';
import AboutApp from './components/AboutApp.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    FourSteps,
    AboutApp
  }
}
</script>

<style>

</style>
