<template>
  <div class="container">
    <div class="titleSearch">
      <h3 class="my-todos">My todos</h3>
      <input class="search" type="text" placeholder="Search" name="search" >
    </div>
    <div class="quantity">
    <button
      @click="setTodos(todos, 'viewAll')"
      name="viewAll"
      class="qu"
      v-bind:class="{'active': viewAll}"
    >
      All {{all}}
    </button>
    /
    <button
      @click="setTodos(done, 'viewDone')"
      name="viewDone"
      class="qu"
      v-bind:class="{'active': viewDone}"
    >
      Done {{done.length}}
    </button>
    /
    <button
      @click="setTodos(undone, 'viewUndone')"
      name="viewUndone"
      class="qu"
      v-bind:class="{'active': viewUndone}"
    >
      Undone {{undone.length}}
    </button>
    </div>
    <div class="todos">
      <div v-bind:key="todo.id" v-for="todo in filter" id="todos">
        <TodoItem v-bind:todo="todo" @del-todo="$emit('del-todo', todo.id)"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoContainer',
  data() {
    return {
      filter: [],
      viewAll: true,
      viewDone: false,
      viewUndone: false
    }
  },
  props: ['todos', 'all', 'done', 'undone'],
  methods: {
    setTodos(data, status) {
      this.filter = data;


      if (status === 'viewAll') {
        this.viewAll = true,
        this.viewDone = false,
        this.viewUndone = false
      }
      if (status === 'viewDone') {
        this.viewAll = false,
        this.viewDone = true,
        this.viewUndone = false
      }

      if (status === 'viewUndone') {
        this.viewAll = false,
        this.viewDone = false,
        this.viewUndone = true
      }
    }
  },
  components: {
    TodoItem,
  },
  emits: ['del-todo'],
  watch: {
    'todos'() {
      this.$emit('update:this.todos', this.todos)
    }
  },
  created() {
    this.setTodos(this.todos, 'viewAll')
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
