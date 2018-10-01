<template>
    
</template>


<script>
import axios from 'axios'

  export default {
    data() {
            var films = [];

           return {
                films,
                isPaginated: false,
                isPaginationSimple: false,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 5
            }
        },
    methods: {
      
    },
    created: function() {
        var comp = this
        axios
          .get('https://ghibliapi.herokuapp.com/films')
          .then(function(respuesta) {
            comp.data = respuesta.data // informacion actual del film. 
          }, function() {
          })
      }
  }
</script>

<style scoped>

</style>