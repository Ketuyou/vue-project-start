<template>
<h1 class="red">{{msg}}</h1>
<ul>
  <li v-for="movie in movies">{{movie.title}}</li>
</ul>
</template>
<script>
import Quest from './Quest'

let List = {
  data () {
    return {
      msg: '电影列表',
      movies: [],
    }
  },
  ready() {
    Quest.jsonp({a:1,b:2},
      (response) => {
        console.log(response)
        this.msg = response.title,
        this.movies = response.subjects
      }
    )
  }
}

export { List as default }

</script>
<style>
.red {
  color: #f00;
}
</style>
