<template>
  <div class="card">
    <button @click="onDeleteTodo(todo.id)">x</button>
    <p>{{todo.title}}</p>
    <p>{{todo.completed}}</p>
    <!-- <b-form-checkbox v-model="checked" name="check-button" switch>
    </b-form-checkbox> -->
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
      return {
        checked: false
      }
    },
  props:{
    todo: {
      completed: Boolean,
      id: Number,
      title: String,
      userId: Number
    }
  },
  methods: {
    onDeleteTodo(id) {
      this.$emit('del-todo', id)
    }
  },
}
</script>

<style scoped>
  .card {
    width: 100%;
    background-color: #fff;
    padding: 4px;
    margin-bottom: 8px;
    border-radius: 4px;
  }
</style>
