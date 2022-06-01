<template>
  <div class="container">
    <h3 class="h3">{{ msg }}</h3>
    <p class="error">{{error}}</p>
    <form
      class="form-add"
      action="submit"
      @submit="addTodo"
      @keyup.enter="addTodo()"
      @keydown="error = ''"
    >
      <input
        class="input-add todo-input"
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
      title: '',
      error: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      if (this.title) {
        const newTodo = {
          id: uuidv4(),
          title: this.title,
          completed: false
        }

        this.$emit('add-todo', newTodo);

        this.title = '';
        this.error = '';
      } else {
        this. error = 'Input is empty!'
      }
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
  margin: 0;
}

.error {
  height: 28px;
  margin: 0;
  color: #ce6b6b;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
</style>
