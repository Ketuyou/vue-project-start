<template>
<div>
  <h1>{{title}}</h1>
</div>
<div>
  <navigator />
</div>
<div>
  <router-view></router-view>
</div>
</template>

<script>
import Navigator from './Components/Navigator'

let App = {
  components: {
    navigator: Navigator,
  },
  data() {
    return {
      title: 'vue-project-start'
    }
  }
}

export { App as default }
</script>

<style src="normalize.css"></style>
<style src="./Common/Reset.css"></style>
