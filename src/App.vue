<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-image: url("./assets/ghibli.jpg");
      background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  text-align: center;
  color: #2c3e50;
}
</style>
