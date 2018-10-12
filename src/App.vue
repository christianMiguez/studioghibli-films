<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from "@/components/NavBar.vue";
export default {
  name: 'App',
  data() {
    return {
    }
  },
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
