import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const HOST_URL = 'http://api.douban.com/v2/movie/top250'

export default {
  jsonp(params, success, error) {
    let url = Vue.url(HOST_URL, params)
    Vue.http.jsonp(url, success, error)
  }
}
