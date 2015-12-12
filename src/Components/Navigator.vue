<template>
<a v-for="item in items" v-link="{path: item.path}">
  {{item.name}}
</a>
</template>
<script>
let Navigator = {
  data() {
    return {
      items: [
        {name: '电影', path: '/list'},
        {name: '广告', path: '/ad'},
      ]
    }
  }
}

export { Navigator as default }
</script>
<style>

</style>
