<template>
    <div class="cards">
            <b-card title="">
                    <H5>{{people.name}}</H5>
                <p class="card-text">
                    Gender: {{people.gender}}
                 </p>
                <p class="card-text">
                    Age: {{people.age}}
                 </p>
                <p class="card-text">
                    Eyes: {{people.eye_color}}
                 </p>
                <p class="card-text">
                    Hair: {{people.hair_color}}
                </p>
                
            </b-card>
    </div>
</template>

<script>

export default {
        data () {
            return {
                characters: null
            }
        },
        props: ["people"]
    }
</script>

<style>
.cards {
    width: 250px;
    height: 200px;
}
.card-text {
    margin: 0px
}
</style>
