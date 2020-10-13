<template>
  <div id="app">
    <Nav id="header" />
    <router-view id="contenido" class="bg-gray-100 " />
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
#app {
  display: grid;
  grid-template-areas:
    "header"
    "contenido"
    "footer";
  grid-template: 100px 1fr 100px / 1fr;
  height: 100vh;
}

#titulo {
  font-family: "Montserrat", sans-serif;
}
</style>
