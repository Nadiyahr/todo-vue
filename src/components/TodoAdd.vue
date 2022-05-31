<template>
  <div class="container">
    <h3 class="h3">{{ msg }}</h3>
    <form
      class="form-add"
      action="submit"
      @submit="addTodo"
      @keyup.enter="addTodo()"
    >
      <input
        class="input-add input"
        type="text"
        name="add"
        placeholder="Todo name"
        v-model="title"
      >
      <input
        type="submit"
        class="btn-add"
        value="+"
      >
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  name: "TodoAdd",
  data() {
    return {
      title: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        id: uuidv4(),
        title: this.title,
        completed: false
      }

      this.$emit('add-todo', newTodo);

      this.title = ''
    }
  },
}
</script>

<style scoped>
.container {
  width: 41%;
  text-align: start;
  height: 160px;
}

.h3 {
  margin-top: 0;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
</style>
