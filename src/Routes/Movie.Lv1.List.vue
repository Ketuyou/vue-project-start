<template>
<h1 class="red">{{title}}</h1>
<ul>
  <li v-for="movie in movies">
    <movie-card
      :score="movie.rating.average"
      :title.once="movie.title"
      :year.once="movie.year"
      :uri.once="movie.images.small"
    />
  </li>
</ul>
</template>
<script>
import Quest from '../Common/Quest'

import MovieCard from '../Components/MovieCard'

let List = {
  components: {
    movieCard: MovieCard,
  },
  data () {
    return {
      title: '电影',
      movies: [],
    }
  },
  ready() {
    Quest.jsonp({start:0, count:5},
      (response) => {
        // console.log(JSON.parse(JSON.stringify(response)))
        console.log(response)
        this.movies = response.subjects
      }
    )
  }
}

export { List as default }

</script>
<style scoped>
.red {
  color: #cd164e;
}
li {
  padding: 5px 0;
}
</style>
