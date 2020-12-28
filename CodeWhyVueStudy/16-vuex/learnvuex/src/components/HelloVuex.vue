<template>
  <div>
    <p>{{ $store.state.counter }}</p>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>----------****分割线****----------</h2>
    <h2>{{ $store.state.info }}</h2>
    <h2>----------****分割线****----------</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVuex"
}
</script>

<style scoped>

</style>