<template>
  <div>
    <transition name="fade">
      <button v-if="showClearCompletedButton" v-on:click="clearCompleted()">
        Clear Completed
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "todo-clear-completed",
  // props: {
  //   showClearCompletedButtonProps: {
  //     type: Boolean,
  //     required: true,
  //   },
  // },
  computed: {
    showClearCompletedButton() {
      return this.$store.getters.showClearCompletedButton;
    },
  },
  methods: {
    clearCompleted() {
      this.$store.state.todos = this.$store.state.todos.filter(
        (todo) => !todo.completed
      );
    },
  },
};
</script>
