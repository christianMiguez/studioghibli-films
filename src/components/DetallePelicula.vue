<template>
    <div class="container2">
        <div class="row textoDetalle" v-if="film">
            <div>
                <b-button href="/films">Back</b-button>
            </div>
            <h1>{{film.title}} </h1>
            <div>
                <h3>Description</h3>
                <p>{{film.description}}</p>
                <h3>Director</h3>
                <p>{{film.director}}</p>
                <h3>Producer</h3>
                <p>{{film.producer}}</p>
                <h3>Year</h3>
                <p>{{film.release_date}}</p>
                <h3>Rating</h3>
                <p>{{film.rt_score}}</p>
                <h3>Characters</h3>
                <div class="peopleCards">
                    <div  v-for="people in people" :key="people.id">
                        <div class="peopleCard" v-if="people.films[0].substr(38, 36) == film.id">
                            <Cards v-bind:people="people" />
                        </div>
                    </div>
                </div>
                <h3>Locations</h3>
                <div v-for="location in locations" :key="location.id">
                    <div v-if="location.films[0].substr(38, 36) == film.id">
                        <p>{{location.name}}</p>  
                    </div>
                </div>
            </div>
            <hr>

            <pre>
            </pre>

            
        </div>
        <div class="loadingElse" v-else>Loading...</div>
    </div>
</template>

<script>
import axios from 'axios'
import Cards from "@/components/Cards.vue";
  
    export default {
        data () {
            return {
                film: null,
                people: null,
                locations: null,
            }
        },
        components: {
            Cards
        },
        mounted () {
            var idFilm = this.$route.params.idFilm
            console.log('### ' + idFilm)
            // cargar pelicula con id "idPelicula" desde la api
            var comp = this
            axios.get('https://ghibliapi.herokuapp.com/films/'+idFilm)
            .then(function(res){
                comp.film = res.data;
            }, 
            function(error){
                console.log(error)
            });
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

<style scoped>
h1 {
    width: 100%;
    padding-bottom:40px;
    padding-top:10px;
    font-weight:bold;
    text-align: center

}
.container2 {
    width: 1600px;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;

}
.textoDetalle {
        text-align: left;
        margin: 15px;
}
.peopleCards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:flex-start;
}
.peopleCard {
    margin-left: 10px;
    width: min-content;
}
.loadingElse {
    width: 100%;
    text-align: center;
    font-weight:bold;
}
</style>
