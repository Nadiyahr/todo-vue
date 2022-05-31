<template>
  <div class="container">
    <form class="titleSearch">
      <h3 class="my-todos">My todos</h3>
      <input
        class="search placeholder"
        type="text"
        placeholder="Search"
        name="search"
        v-model="searchBy"
      >
    </form>
    <div class="quantity">
    <button
      @click="getView(todos, 'viewAll')"
      name="viewAll"
      class="qu"
      v-bind:class="{'active': view.all}"
    >
      All {{counters.all}}
    </button>
    /
    <button
      @click="getView(done, 'viewDone')"
      name="viewDone"
      class="qu"
      v-bind:class="{'active': view.done}"
    >
      Completed {{counters.done.length}}
    </button>
    /
    <button
      @click="getView(undone, 'viewUndone')"
      name="viewUndone"
      class="qu"
      v-bind:class="{'active': view.undone}"
    >
      Incomplete {{counters.undone.length}}
    </button>
    </div>
    <div class="todos">
      <div v-bind:key="todo.id" v-for="todo in filterTodo" id="todos">
        <TodoItem v-bind:todo="todo" @del-todo="$emit('del-todo', todo.id)"/>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoContainer',
  data() {
    return {
      searchBy: null,
    }
  },
  methods: {
    getView(arr, type) {
      this.$emit('set-view', arr, type);
      this.filter.showFilter = false;
    },
    
  },
  props: ['todos', 'counters', 'view'],
  components: {
    TodoItem,
  },
  emits: ['del-todo', 'set-view'],
  created() {
    this.$emit('set-view', this.todos, 'viewAll');
  },
  computed: {
    filterTodo() {
      if (this.searchBy) {
        return this.todos.filter(todo => todo.title.toLowerCase().includes(this.searchBy.toLowerCase()));
      }
      
      return this.todos;
    }
  },
}
</script>

<style scoped>
.container {
  width: 50%;
  height: 76vh;
  padding-top: 20px;
  padding-bottom: 20px;
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
