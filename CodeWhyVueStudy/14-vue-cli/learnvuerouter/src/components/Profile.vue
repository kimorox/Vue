<template>
  <div>
    <h2>我是profile</h2>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
    <h2>{{ $route.query.height }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log('profile create')
  },
  destroyed() {
    console.log('profile destroy')
  }
}
</script>

<style scoped>

</style>