<template>
    <div class="container1">
        <div class="col-sm-12">
            <div>
                <h1>List of films</h1>
                    <b-table striped hover :items="films" :fields="fields" v-if="done != false">
                        <template slot="title" slot-scope="row">
                        <router-link :to="{ name: 'detalle', params: { idFilm: row.item.id } }" >{{ row.value }}</router-link>
                        </template>
                    </b-table>
                <div v-else>Loading...</div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
    export default {
        data() {
            return {
            fields: [
                    {
                    key: 'title',
                    label: 'Title',
                    sortable: false
                    },
                    {
                    key: 'release_date',
                    label: 'Year',
                    sortable: true,
                    sortDirection: 'desc'
                    },
                     {
                    key: 'director',
                    label: 'Director',
                    sortable: false
                    }, {
                    key: 'rt_score',
                    label: 'Rating',
                    sortable: true
                    }
                ],
            films: [],
            done: false
            }
        },
        mounted () {
            // carga de las peliculas desde la api de studio ghibli
            var comp = this
            axios.get('https://ghibliapi.herokuapp.com/films')
            .then(function(res){
                comp.films = res.data;
                comp.done = true;
            }, 
            function(error){
                console.log(error)
            })
        }
    }
</script>

<style scoped>
table {
    width: 100%
}
.container1 {

    width: 1600px;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>