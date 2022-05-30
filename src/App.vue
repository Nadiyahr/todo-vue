<template>
  <div id="app" class="app">
      <div class="hello"></div>
        <h1 class="title">Todo App</h1>
      <main class="main">
        <div class="wrapper">
          <TodoAdd v-on:add-todo="addTodo" msg="Add todo"/>
           <TodoContainer @del-todo="ddeleteTodo" v-bind:todos.sync="todos" v-bind:all="all" v-bind:done="done" v-bind:undone="undone" />
        </div>
      </main>
  </div>
</template>

<script>
import TodoContainer from './components/TodoContainer.vue'
import TodoAdd from './components/TodoAdd.vue'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      done: [],
      undone: [],
      all: 0
    }
  },
  components: {
    TodoContainer,
    TodoAdd,
  },
  methods: {
    addTodo(newTodo) {
      const newData = [...this.todos, newTodo]
      console.log(newData);
      localStorage.setItem('vueTodos', JSON.stringify(newData))
      this.todos = JSON.parse(localStorage.getItem('vueTodos'))
      this.updateData(newData)
    },
    updateData(newData) {
      this.all = newData.length;
      this.done = newData.filter(data => data.completed)
      this.undone = newData.filter(data => !data.completed)
    },
    ddeleteTodo(id) {
      console.log(id, 'todo');
      const filter = this.todos.filter(todo => todo.id !== id)
      localStorage.setItem('vueTodos', JSON.stringify(filter))
      this.todos = JSON.parse(localStorage.getItem('vueTodos'))
      this.updateData(filter)
    }
  },
  created() {
    if (
      JSON.parse(localStorage.getItem('vueTodos')).length === 0
      || JSON.parse(localStorage.getItem('vueTodos')) === null
    ) {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
        .then(res => {

          localStorage.setItem('vueTodos', JSON.stringify(res.data))
          const localData = JSON.parse(localStorage.getItem('vueTodos'))
          this.updateData(localData)
          return this.todos = localData
        })
        .catch(console.log)
    } else {
      this.todos = JSON.parse(localStorage.getItem('vueTodos'));
      this.updateData(this.todos)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.hello {
  width: 100%;
  height: 8vh;
  background-color: #00b3bd;
}

.title {
  text-align: start;
  margin: 10px;
  padding: 0 6%;
  font-size: 40px;
}

.main {
  display: flex;
  justify-content: center;
}

.wrapper {
  width: 93%;
  display: flex;
  justify-content: space-around;
  padding: 0;
  border-radius: 6px;
}

.container {
  width: 45%;
  text-align: start;
  background-color: #ededed;
  border-radius: 4px;
  padding: 30px;
}

@media (max-width: 700px) {
  .title {
    padding: 0;
    padding-left: 6%;
  }
  .main {
    width: 90%;
    margin: auto;
  }
  .wrapper {
    width: 100%;
    padding-top: 0;
    flex-direction: column;
    gap: 20px;
  }

  .container {
    width: 100%;
  }
}
</style>
