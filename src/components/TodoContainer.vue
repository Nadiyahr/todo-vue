<template>
  <div class="container">
    <form class="form-search">
      <h3>My todos</h3>
      <input
        class="search todo-input"
        type="text"
        placeholder="Search"
        name="search"
        v-model="searchBy"
      >
    </form>
    <div class="filter-btns">
    <button
      @click="setTodos('viewAll')"
      name="viewAll"
      class="f-btn"
      v-bind:class="{'active': view.all}"
    >
      All
    </button>
    /
    <button
      @click="setTodos('viewDone')"
      name="viewDone"
      class="f-btn"
      v-bind:class="{'active': view.done}"
    >
      Completed
    </button>
    /
    <button
      @click="setTodos('viewUndone')"
      name="viewUndone"
      class="f-btn"
      v-bind:class="{'active': view.undone}"
    >
      Incomplete
    </button>
    </div>
    <div class="todos">
      <div
        v-bind:key="todo.id"
        v-for="todo in filterTodo"
        id="todos"
      >
        <TodoItem
          v-bind:todo="todo"
          @del-todo="$emit('del-todo', todo.id)"
          @toggle-status="$emit('toggle-status', todo.id)"
        />
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
      view: {
        all: true,
        done: false,
        undone: false
      }
    }
  },
  methods: {
    getView(arr, type) {
      this.$emit('set-view', arr, type);
      this.filter.showFilter = false;
    },
    setTodos(status) {
      if (status === 'viewAll') {
        this.view.all = true,
        this.view.done = false,
        this.view.undone = false
      }
      if (status === 'viewDone') {
        this.view.all = false,
        this.view.done = true,
        this.view.undone = false
      }
      if (status === 'viewUndone') {
        this.view.all = false,
        this.view.done = false,
        this.view.undone = true
      }
    }
  },
  props: ['todos'],
  components: {
    TodoItem,
  },
  emits: ['del-todo', 'toggle-status'],
  created() {
    this.setTodos('viewAll');
  },
  computed: {
    filterTodo() {
      if (this.searchBy) {
        return this.todos.filter(todo => todo.title.includes(this.searchBy));
      }

      if (this.view.done) {
        return this.todos.filter(todo => todo.completed);
      }

      if (this.view.undone) {
        return this.todos.filter(todo => !todo.completed);
      }

      return this.todos
    }
  },
}
</script>

<style scoped>
.container {
  width: 50%;
  height: 600px;
  padding: 20px 0;
}

h3 {
  margin-top: 16px;
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background-color: #ededed;
}

::-webkit-scrollbar-thumb {
  background-color: #00b3bd;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}

@media (max-width: 480px) {

  ::-webkit-scrollbar {
    width: 2px;
  }
}
</style>
