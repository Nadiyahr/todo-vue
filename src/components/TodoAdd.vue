<template>
  <div class="container">
    <h3 class="h3">{{ msg }}</h3>
    <form action="submit" @submit="addTodo" class="formAdd" >
      <input class="inputAdd" placeholder="Add todo..." type="text" name="add" v-model="title">
      <input type="submit" class="add" value="+">
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
        comleted: false
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

.add {
  width: 40px;
  background-color: #00b3bd;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}
</style>
