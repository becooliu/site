<template>
  <div id="app">
    <Header v-if="checkIsLogin()"></Header>
    <router-view/>
    <Footer v-if="checkIsLogin()"></Footer>
  </div>
</template>

<script>
import Header from "./pages/header";
import Footer from "./pages/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  methods: {
    checkIsLogin(){
      return this.$store.state.showHeaderFooter;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}
</style>
