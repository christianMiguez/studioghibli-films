<template>
  <div id="app">
    <Header />
    <NavBar  />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";
export default {
  name: 'App',
  components: {
    Header,
    NavBar
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  height: 100% !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  text-align: center;
  color: #2c3e50;
}
</style>
