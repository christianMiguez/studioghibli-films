<template>
    <div class="container1">
        <div class="col-sm-12">
            <div>
                <h1>Films</h1>
                    <b-table striped hover :items="films" :fields="fields" v-if="done != false" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" >
                        <template slot="title" slot-scope="row">
                        <router-link :to="{ name: 'detalle', params: { idFilm: row.item.id } }" style="color:red" >{{ row.value }}</router-link>
                        </template>
                        <template slot="rt_score" slot-scope="row" >
                        <div v-b-tooltip.hover :title="row.value">
                            
                            <div class="iconsFa">
                                 <font-awesome-icon icon="star"  v-for="(item, index) in parseInt(getStars(row.value))"  />
                            </div>

                        </div>
                        </template>
                    </b-table>
                <div class="loadingElse" v-else>Loading...</div>
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
                    sortDirection: 'DESC'
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
            done: false,
            sortBy: 'release_date',
            sortDesc: true
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
        },
        methods: {
            getStars(ratingStars) {
                //return this.ratingStars = (parseInt(ratingStars) / 20);
                var ratingStars = parseInt(ratingStars);
                return new String(ratingStars / 20)
            }
        },
        computed: {
            sortedArray(){
                return this.films.sort((a, b) => a.release_date - b.release_date );
            }
        }
    }
</script>

<style scoped>
h1 {
    width: 100%;
    padding-bottom:40px;
    padding-top:10px;
    font-weight:bold
}
.container1 {
    width: 1600px;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 10px;

}
table {
    width: 100%
}
.iconsFa {color:orange}
.loadingElse {
    width: 100%;
    text-align: center;
    font-weight:bold;
}
</style>