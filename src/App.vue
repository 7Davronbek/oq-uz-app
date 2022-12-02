
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Navbar />
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar
}
}
</script>

<style>

</style>
