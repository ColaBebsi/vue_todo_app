<template>
  <div>
    <label
      ><input
        type="checkbox"
        v-bind:checked="!anyRemaining"
        v-on:change="checkAllTodos()"
      />Check All</label
    >
  </div>
</template>

<script>
export default {
  name: "todo-check-all",
  computed: {
    anyRemaining() {
      return this.$store.getters.anyRemaining;
    },
  },
  methods: {
    checkAllTodos() {
      this.$store.state.todos.forEach(
        (todo) => (todo.completed = event.target.checked)
      );
    },
  },
};
</script>

<style>
</style>