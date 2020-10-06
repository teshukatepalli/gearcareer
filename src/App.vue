<template>
  <div id="app">
    <header id="home" class="hero-area">
      <Navbar />
      <router-view />
    </header>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
