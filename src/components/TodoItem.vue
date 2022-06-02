<template>
  <div class="card">
    <button class="f-btn" @click="onDeleteTodo(todo.id)">x</button>
    <h3 class="todo-title">{{todo.title}}</h3>
    <p >
      <onoff-toggle
        v-model="checked"
        @input="onTogleTodo"
        theme="ios"
        onColor="#00b3db1f"
        offColor="#ededed"
        borderColor="#fff"
        thumbColor="#00b3db"
        width="60"
        height="30"
        shadow="shadow"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      checked: this.todo.completed,
      shadow: false
    }
  },
  props:{
    todo: {
      completed: Boolean,
      id: Number,
      title: String,
      userId: Number
    }
  },
  methods: {
    onDeleteTodo(id) {
      this.$emit('del-todo', id)
    },
    onTogleTodo() {
      this.$emit('toggle-status' , this.todo.id)
    }
  },
}
</script>

<style scoped>
.f-btn {
  height: 30px;
  margin-right: 12px;
  color: #00000040;
  font-size: 14px;
  transition: all 0.5;
}

.f-btn:hover {
  color: #ce6b6b;
  transform: scale(1.3);
}
</style>
