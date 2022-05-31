<template>
  <div class="container">
    <h3 class="h3">{{ msg }}</h3>
    <form
      class="formAdd"
      action="submit"
      @submit="addTodo"
      @keyup.enter="addTodo()"
    >
      <input
        class="inputAdd placeholder"
        type="text"
        name="add"
        :placeholder="msg"
        v-model="title"
      >
      <input
        type="submit"
        class="btnAdd"
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
  width: 40%;
  text-align: start;
  height: 160px;
}

.h3 {
  margin-top: 0;
}

.formAdd {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  margin-top: 10px;
  padding: 4px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
}

.inputAdd {
  width: 80%;
  border: none;
  outline: none;
}

.btnAdd {
  width: 40px;
  background-color: #00b3bd;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}
</style>
