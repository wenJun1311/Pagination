<template>
  <div>
    <div>这是首页</div>
    <div>
      <button @click="toAbout">跳转</button>
    </div>
    <Pagination />
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toAbout() {
      this.$router.push('/about')
    },
  },
}
</script>

<style scope lang="less"></style>
