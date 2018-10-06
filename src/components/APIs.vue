<template>
   <div>
     <div class="card text-left" style="width: 100%">
  <div class="card-body">
    <h2 class="card-title">Título:{{films.title}}</h2>
    <h2 class="card-title">Director:{{films.director}}</h2>
    <h2 class="card-title">Año:{{films.release_date}}</h2>
    <h2 class="card-title">Rating:{{films.rt_score}}</h2> 

  </div>
</div>
    </div> 
</template>

<script>
import axios from 'axios'
export default {
 data() {
    return {
    films:null,
 }},
created() {
    var comp = this
    var apiUrl= 'https://ghibliapi.herokuapp.com/films'
    var apiPromise = axios.get('https://ghibliapi.herokuapp.com/films')
    .then(function(res){
        comp.films = res.data[4]
        }, function(error){
            console.log(error)
            })
       }
    }


</script>

<style scoped>

</style>



