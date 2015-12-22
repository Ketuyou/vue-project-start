<template>
<nav>
  <a
    v-for="item in items"
    v-link="{path: item.path}"
  >
    {{item.name}}
  </a>
</nav>

</template>
<script>
// import Store from '../Store'

// let {
//   state,
//   actions,
// } = Store

let Navigator = {
  data() {
    return {
      items: [
        {name: '电影', path: '/list'},
        {name: '广告', path: '/ad'},
      ]
    }
  },
}

export { Navigator as default }
</script>
<style scoped>
nav {
  display: flex; position: fixed; left: 0; bottom: 0; width: 100%; height: 36px;
  line-height: 36px;
}

nav a {
  flex: 1; color: #cd164e; font-size: 16px; background-color: #eee;
  text-align: center;
}

.v-link-active {
  color: #f8f8f8; background-color: #cd163e;
}
</style>
