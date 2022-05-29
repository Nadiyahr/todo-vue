<template>
  <div class="container">
    <div class="titleSearch">
      <h3 class="my-todos">My todos</h3>
      <input class="search" type="text" placeholder="Search" name="search" id="search">
    </div>
    <div class="quantity">
    <button class="qu">All 20</button>/<button class="qu">Done 11</button>/<button class="qu">Undone 9</button>
    </div>
    <div class="todos">
      <div v-bind:key="todo.id" v-for="todo in todos" id="todos">
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
  width: 50%;
  height: 80vh;
}

.todos {
  max-height: 80%;
  overflow-y: scroll;
}

.titleSearch {
  display: flex;
  justify-content: space-between;
  padding: 4px;
}

.search {
  height: 38px;
  border: none;
  outline: none;
}

.my-todos {
  margin-top: 18px;
}

.quantity {
  padding-bottom: 12px;
}

.qu {
  border: none;
}

</style>
