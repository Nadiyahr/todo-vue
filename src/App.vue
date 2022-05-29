<template>
  <div id="app" class="app">
      <div class="hello"></div>
        <h1 class="title">Todo App</h1>
      <main class="main">
        <div class="wrapper">
          <TodoSearch msg="Add todo"/>
          <TodoContainer v-bind:todos="todos" />
        </div>
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

.hello {
  width: 100%;
  height: 11vh;
  background-color: #00b3bd;
}

.title {
  text-align: start;
  padding-left: 8.5%;
  padding-top: 22px;
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
  padding: 20px;
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
  /* .main {
  } */
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
