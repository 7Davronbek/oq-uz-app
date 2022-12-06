
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Navbar />
  <Header />
  <FourSteps />
  <AboutApp />
  <Benefits />
  <Constructor />
  <ReadyToMove />
  <Footer />

  <!-- <router-view /> -->
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import FourSteps from './components/FourSteps.vue';
import AboutApp from './components/AboutApp.vue';
import Constructor from './components/Constructor.vue';
import ReadyToMove from './components/ReadyToMove.vue';
import Footer from './components/Footer.vue';
import Benefits from './components/Benefits.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    FourSteps,
    AboutApp,
    Constructor,
    ReadyToMove,
    Footer,
    Benefits
  }
}
</script>

<style>

</style>
