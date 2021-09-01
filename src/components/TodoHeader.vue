<template>
  <h2 class="todo-header">{{ title }}</h2>
</template>

<script>
export default {
  name: "todo-header",
  computed: {
    title() {
      return this.$store.state.title;
    },
  },
};
</script>

<style>
.todo-header {
  text-align: center;
}
</style>