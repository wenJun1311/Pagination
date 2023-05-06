<template>
  <div>
    <button @click="toHome">back to home</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    toHome() {
      this.$router.push('/home')
    },
  },
}
</script>
