<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/views/Home/Home.vue'
export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>

<style></style>
