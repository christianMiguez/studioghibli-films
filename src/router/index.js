import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import APIs from "@/components/APIs.vue"
import film from "@/components/film.vue"

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
      name: 'Mainpage',
      component: APIs
    },
    {
      path: '/:filmPath',
      name: 'filmName',
      component: film
    },
    {
      path: '/1',
      name: '1',
      component: APIs
    },
  ]
})
