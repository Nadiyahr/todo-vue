<template>
  <div>
    <p>{{todo.title}}</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props:{
    todo: {
      completed: Boolean,
      id: Number,
      title: String,
      userId: Number
    }
  }
}
</script>

<style scoped>
</style>
