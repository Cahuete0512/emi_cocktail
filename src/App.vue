<template>
  <nav-bar/>
  <Footer/>
</template>
<script>

import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
@import url('../src/style/RandomStyle.css');
@import url('../src/style/NavBarStyle.css');
@import url('../src/style/Footer.css');

</style>
