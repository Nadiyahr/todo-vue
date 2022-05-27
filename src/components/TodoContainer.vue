<template>
  <div class="container">
    <h1>My todos</h1>
    <div>
      <div v-bind:key="todo.id" v-for="todo in todos">
        <TodoItem v-bind:todo="todo" />
      </div>
      
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoContainer',
  props: ['todos'],
  components: {
    TodoItem,
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 600px;
}

</style>
