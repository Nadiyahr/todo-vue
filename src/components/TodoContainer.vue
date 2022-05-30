<template>
  <div class="container">
    <div class="titleSearch">
      <h3 class="my-todos">My todos</h3>
      <input class="search" type="text" placeholder="Search" name="search" >
    </div>
    <div class="quantity">
    <button
      @click="$emit('set-view', todos, 'viewAll')"
      name="viewAll"
      class="qu"
      v-bind:class="{'active': view.all}"
    >
      All {{all}}
    </button>
    /
    <button
      @click="$emit('set-view', done, 'viewDone')"
      name="viewDone"
      class="qu"
      v-bind:class="{'active': view.done}"
    >
      Done {{done.length}}
    </button>
    /
    <button
      @click="$emit('set-view', undone, 'viewUndone')"
      name="viewUndone"
      class="qu"
      v-bind:class="{'active': view.undone}"
    >
      Undone {{undone.length}}
    </button>
    </div>
    <div class="todos">
      <div v-bind:key="todo.id" v-for="todo in todos" id="todos">
        <TodoItem v-bind:todo="todo" @del-todo="$emit('del-todo', todo.id)"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoContainer',
  props: ['todos', 'all', 'done', 'undone', 'view'],
  components: {
    TodoItem,
  },
  emits: ['del-todo', 'set-view'],
  created() {
    this.$emit('set-view', this.todos, 'viewAll')
  }
}
</script>

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
  cursor: pointer;
}

.active {
  color: #00b3bd;
}

@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}

</style>
