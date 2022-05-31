<template>
  <div id="app" class="app">
    <header>
      <div class="header"></div>
      <h1 class="main-title">Todo App</h1>
    </header>
      <main class="main">
        <div class="wrapper">
          <TodoAdd @add-todo="addTodo" msg="Add todo"/>
           <TodoContainer
             @del-todo="deleteTodo"
             @toggle-status="toggleCompleted"
             :todos.sync="todos"
            />
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
      todos: []
    }
  },
  components: {
    TodoContainer,
    TodoAdd,
  },
  methods: {
    addTodo(newTodo) {
      const newData = this.sortTodos([...this.todos, newTodo]);
      localStorage.setItem('vueTodos', JSON.stringify(newData))
      this.todos = JSON.parse(localStorage.getItem('vueTodos'))
    },
    deleteTodo(id) {
      const filter = this.todos.filter(todo => todo.id !== id)
      localStorage.setItem('vueTodos', JSON.stringify(filter))
      this.todos = JSON.parse(localStorage.getItem('vueTodos'))
    },
    sortTodos(input) {
      return input.sort((a, b) => Number(a.completed - Number(b.completed)))
    },
    toggleCompleted(id) {
      const selectedTodo = this.todos.find(todo => todo.id === id);
      selectedTodo.completed = !selectedTodo.completed;
      localStorage.setItem('vueTodos', JSON.stringify(this.todos))
      this.todos = this.sortTodos(JSON.parse(localStorage.getItem('vueTodos')))
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
          return this.todos = this.sortTodos(localData)
        })
        .catch(console.log)
    } else {
      this.todos = this.sortTodos(JSON.parse(localStorage.getItem('vueTodos')));
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('./assets/styles/index.css');
@import url('./assets/styles/todoContainer.css');
@import url('./assets/styles/todoAdd.css');
@import url('./assets/styles/todoItem.css');
</style>
