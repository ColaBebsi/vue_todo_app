<template>
  <div>
    <button
      v-bind:class="{ active: filter == 'all' }"
      v-on:click="changeFilter('all')"
    >
      All
    </button>
    <button
      v-bind:class="{ active: filter == 'active' }"
      v-on:click="changeFilter('active')"
    >
      Active
    </button>
    <button
      v-bind:class="{ active: filter == 'completed' }"
      v-on:click="changeFilter('completed')"
    >
      Completed
    </button>
  </div>
</template>

<script>
export default {
  name: "todo-filtered",
  data() {
    return {
      filter: "all",
    };
  },
  methods: {
    changeFilter(filter) {
      this.filter = filter;
      eventBus.$emit("emitTodosFiltered", filter);
    },
  },
};
</script>

<style>
</style>