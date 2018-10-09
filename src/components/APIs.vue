<template>
   <div class="bodyDiv">
        <delay :wait="1200">
        <div class="listas">
            <div class="lista">
            <b-list-group>
                <h2>FILMS</h2>
                <div v-for="film in films" :key="film.id">
                    <b-list-group-item  > 
                        <router-link :to="{name: 'filmName', params: {filmPath: film.id}}">{{film.title}} </router-link>
                    </b-list-group-item>
                </div>        
            </b-list-group>
            </div>
            <div class="lista">
            <b-list-group>
                <h2>CHARACTERS</h2>
                <div v-for="people in people" :key="people.id">
                    <b-list-group-item  > 
                       {{people.name}}
                    </b-list-group-item>
                </div>        
            </b-list-group>
            </div>
            <div class="lista">
            <b-list-group>
                <h2>LOCATIONS</h2>
                <div v-for="location in locations" :key="location.id">
                    <b-list-group-item  > 
                       {{location.name}}
                    </b-list-group-item>
                </div>        
            </b-list-group>
            </div>
            <div class="lista">
            <b-list-group>
                <h2>DIRECTORS</h2>
                <div v-for="film in films" :key="film.director">
                    <b-list-group-item  > 
                       {{film.director}}
                    </b-list-group-item>
                </div>        
            </b-list-group>
            </div>
        </div>
         </delay>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
        films: [],
        people: [],
        locations: [],
        directors: []
        }
    },
    components: {
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

<style scoped>
.listas {
    width: min-content;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
}
.lista {
    width: 400px;

}
</style>



