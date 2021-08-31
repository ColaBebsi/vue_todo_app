<template>
  <div>
    <label
      ><input
        type="checkbox"
        v-bind:checked="!anyRemainingProps"
        v-on:change="checkAllTodos()"
      />Check All</label
    >
  </div>
</template>

<script>
export default {
  name: "todo-check-all",
  props: {
    anyRemainingProps: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    checkAllTodos() {
      eventBus.$emit("emitCheckAllTodos", this.anyRemainingProps);
    },
  },
};
</script>

<style>
</style>