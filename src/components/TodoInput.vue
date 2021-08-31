<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done?"
      v-model="newTodo"
      v-on:keyup.enter="addTodo()"
    />
  </div>
</template>

<script>
export default {
  name: "todo-input",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodo() {
      eventBus.$emit("emitAddTodo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<style>
</style>