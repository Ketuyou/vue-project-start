<template>
  <h1>{{title}}</h1>
  <p>
    <a v-link="{ path: '/list' }">电影列表</a>
    <a v-link="{ path: '/ad' }">广告</a>
  </p>
  <router-view></router-view>
</template>

<script>
let App = {
  data() {
    return {
      title: 'vue-project-start'
    }
  }
}

export { App as default }
</script>

<style src="normalize.css"></style>
