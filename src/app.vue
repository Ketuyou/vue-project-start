<template>
<div>
  <h1>{{title}}</h1>
</div>
<div>
  <navigator />
</div>
<div class="view-container">
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
<style scoped>
h1 {
  font-size: 23px; text-align: center; background-color: #cd164e; color: #f0f0f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .4); margin: 0; padding: 14px 0;
  position: fixed; left: 0; top: 0; width: 100%;
}

.view-container {
  padding: 55px 0 40px 0; 
}
</style>
