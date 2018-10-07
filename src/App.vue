<template>
  <div id="app">
    <NavBar  />
    <APIs />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import APIs from "@/components/APIs.vue";
export default {
  name: 'App',
  components: {
    Header,
    NavBar,
    APIs
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
