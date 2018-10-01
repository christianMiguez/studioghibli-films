<template>
  <div id="app" class="container">

    <NavBar />  
    <Films  />

  </div>

</template>

<script>
//import RecursoRemoto from '@/playground/recursoremoto.vue'
import Films from '@/playground/films.vue'
import NavBar from '@/playground/navbar.vue'


export default {
  name: 'app',
  components: {
    
    Films,
    NavBar
  }
}
</script>

<style>
</style>
