<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户界面内容</p>
    <h2>{{ userId }}</h2>
    <p>{{ $route.params.userId }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  created() {
    console.log('user create')
  },
  destroyed() {
    console.log('user destroy')
  },
  computed: {
    userId() {
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>