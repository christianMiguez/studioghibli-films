<template>
<b-navbar toggleable="md" type="dark" variant="info">
    <div >
        <img src="@/\assets/totoro.png" alt="" class="logo">
    </div>


  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <div class="miya">
  <b-navbar-brand href="#/"><h2>Miyazaki Wiki</h2></b-navbar-brand>
    </div>
  <b-collapse is-nav id="nav_collapse">

<div>
  <b-dropdown id="ddown1" text="Peliculas" class="m-md-2">
    <delay :wait="2000">
      <b-dropdown-item v-for="film in films" v-bind:key="film.id" :value="film.title" >a{{film.title}}</b-dropdown-item>
    </delay>
  </b-dropdown>
  <b-dropdown id="ddown1" text="Characters" class="m-md-2">
    <delay :wait="2000">
      <b-dropdown-item v-for="film in films" v-bind:key="film.id" :value="film.title" >a{{film.title}}</b-dropdown-item>
    </delay>
  </b-dropdown>
  <b-dropdown id="ddown1" text="Locations" class="m-md-2">
    <delay :wait="2000">
      <b-dropdown-item v-for="film in films" v-bind:key="film.id" :value="film.title" >a{{film.title}}</b-dropdown-item>
    </delay>
  </b-dropdown>
   <b-dropdown id="ddown1" text="Directors" class="m-md-2">
    <delay :wait="2000">
      <b-dropdown-item v-for="film in films" v-bind:key="film.id" :value="film.title" >a{{film.title}}</b-dropdown-item>
    </delay>
  </b-dropdown>
</div>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
    name: "NavBar",
    data () {
      return{
        algo: []
      }

    },
    components: {
    },
    props: ["films"]
}
</script>

<style >
.logo {
    width: 50px;
    height: 50px;
}
.NavBarD1 {
    width: 100%;
    background-color: darkolivegreen;

}
.miya {
  margin-left: 15px;
}
</style>
