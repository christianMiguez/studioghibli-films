import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import APIs from "@/components/APIs.vue"
import ListaPeliculas from "@/components/ListaPeliculas.vue"
import DetallePelicula from "@/components/DetallePelicula.vue"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Delay from 'vue-delay'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(Delay)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Films',
      component: ListaPeliculas
    },
    {
      path: '/films',
      name: 'lista',
      component: ListaPeliculas
    },
    {
      path: '/:idFilm',
      name: 'detalle',
      component: DetallePelicula
    }
  ]
})
