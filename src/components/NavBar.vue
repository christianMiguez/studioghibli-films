<template>
<b-navbar toggleable="md" type="dark" variant="info">
  <div >
    <a href="#/">
      <img src="@/\assets/logo.svg" alt="" class="logo">
    </a>
  </div>
  
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  
  <b-collapse is-nav id="nav_collapse">

  <div>
    <b-button class="nvbutton" href="#/films">Films</b-button>
  </div>
  <div>
    <b-button class="nvbutton" href="#/characters">Characters</b-button>
  </div>
  <div>
    <b-button class="nvbutton" href="#/locations">Locations</b-button>
  </div>
  <div>
    <b-button class="nvbutton" href="#/directors">Directors</b-button>
  </div>

    <!-- Right aligned nav items -->
  <b-navbar-nav class="ml-auto">

  <b-nav-form class="searchForm">
    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
  </b-nav-form>


    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
    name: "NavBar",
    data () {
      return{
      }
    },
    components: {
    },
}
</script>

<style >
.logo {
    height: 80px;
    margin-left: 20px;
}
.NavBarD1 {
    width: 100%;
    background-color: darkolivegreen;

}

.nvbutton {
  margin-left: 15px;
  margin-top: 45px;
}
.searchForm {
  margin-top: 45px;
  margin-right: 20px;
}
</style>
