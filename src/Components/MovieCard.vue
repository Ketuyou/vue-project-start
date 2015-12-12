<template>
  <div class="card-container">
    <image :src.once="uri" />
    <div class="card-info">
      <h3>{{title}}</h3>
      <p>
        <span>{{year}}</span> /
        <span>{{score}}</span>
      </p>
    </div>
  </div>
</template>
<script>
let MovieCard = {
  props: ['uri', 'title', 'year', 'score']
}

export default MovieCard
</script>
<style>
.card-container {
  display: flex;
}
.card-info {
  flex: 1;
}
</style>
