import Vue from 'vue'
import VueRouter from 'vue-router'

import List from '../Routes/Movie.Lv1.List'
import Ad from '../Routes/Ad.Lv1.Main'

Vue.use(VueRouter)

let Router = new VueRouter()

Router.map({
  '/list': {
    component: List,
  },
  '/ad': {
    component: Ad,
  },
})


export { Router as default }
