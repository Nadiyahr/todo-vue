<template>
  <div class="container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "TodoSearch",
  props: {
    msg: String
  },
}
</script>

<style scoped>
.container {
  height: 200px;
}
</style>
