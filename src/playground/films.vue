<template>
<table class="table">
  <thead>
    <tr>
      <th>Año</th>
      <th>Título</th>
      <th>Description</th>
      <th>Rating</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="film in films">
        <td>{{film.release_date}}</td>
        <td>{{film.title}}</td>
        <td>{{film.description}}</td>
        <td>{{film.rt_score}}</td>
    </tr>
  </tbody>
</table>
</template>


<script>
import axios from 'axios'

  export default {
    data() {
            var films = [];

           return {
                films,
            }
        },
    methods: {
        sort:function(s) {
        }
      
    },
    created: function() {
        var comp = this
        axios
          .get('https://ghibliapi.herokuapp.com/films')
          .then(function(respuesta) {
            comp.films = respuesta.data // informacion actual del film. 
          }, function() {
          })
      }
  }
</script>

<style scoped>

</style>