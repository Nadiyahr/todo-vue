<template>
  <div class="container">
    <h3 class="h3">{{ msg }}</h3>
    <form action="submit" class="formAdd" >
      <input class="inputAdd" placeholder="Add new todo" type="text" name="add" id="add">
      <button class="add">+</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoSearch",
  props: {
    msg: String
  },
}
</script>

<style scoped>
.container {
  width: 40%;
  text-align: start;
  height: 160px;
}

.h3 {
  margin-top: 0;
}

.formAdd {
  display: flex;
  justify-content: space-between;
  width: 102%;
  height: 48px;
  margin-top: 10px;
  padding: 4px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
}

.inputAdd {
  width: 80%;
  border: none;
  outline: none;
}

.add {
  width: 40px;
  background-color: #00b3bd;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
}
</style>
