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
*{
  margin:0;
  padding:0;
}

body {
  width: 100%;
  background-color: lightgray;
  padding-top: 5%;
  margin:0;
  background-size: cover;
}

@media (max-width:700px) {
  body {
    padding-top: 17%;
  }
}
</style>
