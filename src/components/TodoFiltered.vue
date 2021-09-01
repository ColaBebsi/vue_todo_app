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
  computed: {
    filter() {
      return this.$store.state.filter;
    }
  },
  methods: {
    changeFilter(filter) {
      this.$store.dispatch("filterTodo", filter)
    },
  },
};
</script>