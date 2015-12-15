<template>
<nav>
  <a
    v-for="item in items"
    v-link="{path: item.path}"
    :class="index === $index ? 'active' : ''"
    @click="tab($index)"
  >
    {{item.name}}
  </a>
</nav>

</template>
<script>
import Store from '../Store'

let {
  state,
  actions,
} = Store

let Navigator = {
  data() {
    return {
      items: [
        {name: '电影', path: '/list'},
        {name: '广告', path: '/ad'},
      ]
    }
  },
  computed: {
    index: () => state.navigator.index,
  },
  methods: {
    tab(index) {
      actions.tabNav(index)
    }
  }
}

export { Navigator as default }
</script>
<style scoped>
nav {
  width: 640px; display: flex;
}

nav a {
  flex: 1; color: #cd164e; font-size: 16px; background-color: #eee;
  text-align: center; padding: 5px 0;
}

nav a.active {
  color: #f8f8f8; background-color: #cd163e;
}
</style>
