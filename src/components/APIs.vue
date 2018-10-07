<template>
   <div>
        <div v-for="film in films" :key="film.id">
            <b-card>
                <h2 class="card-title">Título:{{film.title}}</h2>
                <h2 class="card-title">Director:{{film.director}}</h2>
                <h2 class="card-title">Año:{{film.release_date}}</h2>
                <h2 class="card-title">Rating:{{film.rt_score}}</h2> 
            </b-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
 data() {
    return {
    films: [],
 }},
created() {
    var comp = this
    var apiUrl= 'https://ghibliapi.herokuapp.com/films'
    var apiPromise = axios.get('https://ghibliapi.herokuapp.com/films')
    .then(function(res){
        comp.films = res.data
        }, function(error){
            console.log(error)
            })
       }
    }


</script>

<style scoped>

</style>



