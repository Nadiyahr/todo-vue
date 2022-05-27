<template>
  <div id="app" class="app">
    <div class="hello"></div>
    <main class="wrapper">
      <TodoSearch msg="Add todo"/>
      <TodoContainer v-bind:todos="todos" />
    </main>
  </div>
</template>

<script>
import TodoContainer from './components/TodoContainer.vue'
import TodoSearch from './components/TodoSearch.vue'
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
    TodoSearch,
  },
  methods: {
    
  },
  created() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
        .then(res => {
           console.log(res);
           return this.todos = res.data
          })
        .catch(console.log)
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

.wrapper {
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}

.hello {
  width: 100%;
  height: 75px;
  background-color: #00b3bd;
}

.container {
  width: 600px;
  background-color: #ededed;
  border-radius: 4px;
  padding: 30px;
}
</style>
