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
      if (this.newTodo.trim().length === 0) return;

      const payload = {
        id: this.$store.state.todoId++,
        title: this.newTodo,
      };

      this.$store.dispatch("createTodo", payload);

      this.newTodo = "";
    },
  },
};
</script>

<style>
</style>