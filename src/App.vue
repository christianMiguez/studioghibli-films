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
    films: [],
    people: [],
    locations: [],
    directors: []
    }
  },
  components: {
    NavBar,
  },
  mounted () {
    var comp = this
    var apiUrl= 'https://ghibliapi.herokuapp.com/films'
    var apiPromise = axios.get('https://ghibliapi.herokuapp.com/films')
    .then(function(res){
        comp.films = res.data
    }, 
    function(error){
        console.log(error)
    })
    var apiUrl= 'https://ghibliapi.herokuapp.com/people/'
    var apiPromise = axios.get('https://ghibliapi.herokuapp.com/people/')
    .then(function(res){
        comp.people = res.data
    }, 
    function(error){
        console.log(error)
    })
    var apiUrl= 'https://ghibliapi.herokuapp.com/locations/'
    var apiPromise = axios.get('https://ghibliapi.herokuapp.com/locations/')
    .then(function(res){
        comp.locations = res.data
    }, 
    function(error){
        console.log(error)
    })
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
