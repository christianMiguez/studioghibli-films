<template>
    <div class="cards">
        <h2>Characters</h2>
        <b-card-group deck>
            <b-card title="Title"
                    img-src="https://picsum.photos/300/300/?image=41"
                    img-alt="Img"
                    img-top>
                <p class="card-text">
                    This is a wider card with supporting text below as a
                    natural lead-in to additional content. This content
                    is a little bit longer.
                </p>
                
            </b-card>
        </b-card-group>
    </div>
</template>

<script>

export default {
        data () {
            return {
                characters: null
            }
        }
    }
</script>

<style>
.cards {
    margin-bottom: 30px
}
</style>
