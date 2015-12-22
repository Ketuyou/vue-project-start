import Vue from 'vue'
import VueRouter from 'vue-router'

import MovieList from '../Routes/Lv1.MovieList'
import Ad from '../Routes/Lv1.Ad'

Vue.use(VueRouter)

let Router = new VueRouter()

Router.map({
  '/list': {
    component: MovieList,
  },
  '/ad': {
    component: Ad,
  },
})


export { Router as default }
