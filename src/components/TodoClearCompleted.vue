<template>
  <div>
    <transition name="fade">
      <button v-if="showClearCompletedButtonProps" v-on:click="clearCompleted()">
        Clear Completed
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "todo-clear-completed",
  props: {
    showClearCompletedButtonProps: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
      clearCompleted() {
          eventBus.$emit("emitClearCompleted");
      }
  }
};
</script>
