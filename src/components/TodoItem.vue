<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="completed" v-on:change="doneEdit()" />
      <div
        v-if="!editing"
        class="todo-item-title"
        v-on:dblclick="editTodo()"
        v-bind:class="{ completed: completed }"
      >
        {{ title }}
      </div>
      <input
        v-else
        class="todo-item-edit"
        type="text"
        v-model="title"
        v-on:blur="doneEdit()"
        v-on:keyup.enter="doneEdit()"
        v-on:keyup.esc="cancelEdit()"
        v-focus
      />
    </div>
    <div class="remove-todo-item" v-on:click="removeTodo(todoProps.id)">
      &times;
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todoProps: {
      type: Object,
      required: true,
    },
    indexProps: {
      type: Number,
      required: true,
    },
    checkAllProps: {
      type: Boolean,
      required: true,
    },
  },
  directives: {
    focus: {
      inserted: (el) => {
        el.focus();
      },
    },
  },
  watch: {
    checkAllProps() {
      // if(this.checkAllProps) {
      //     this.completed = true;
      // } else {
      //     this.completed = this.todoProps.completed;
      // }

      this.completed = this.checkAllProps ? true : this.todoProps.completed;
    },
  },
  data() {
    return {
      id: this.todoProps.id,
      title: this.todoProps.title,
      completed: this.todoProps.completed,
      editing: this.todoProps.editing,
      beforeEditCache: "",
    };
  },
  methods: {
    editTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },
    doneEdit() {
      if (this.title.trim() === "") {
        this.title = this.beforeEditCache;
      }

      this.editing = false;

      // eventBus.$emit("emitDoneEdit", {
      //   todo: {
      //     id: this.id,
      //     title: this.title,
      //     completed: this.completed,
      //     editing: this.editing,
      //   },
      // });
      const index = this.$store.state.todos.findIndex(
        (item) => item.id === this.id
      );

      this.$store.state.todos.splice(index, 1, {
        id: this.id,
        title: this.title,
        completed: this.completed,
        editing: this.editing,
      });
    },
    cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    },
    removeTodo(id) {
      const index = this.$store.state.todos.findIndex((item) => {
        return item.id === id;
      });

      this.$store.state.todos.splice(index, 1);
    },
  },
};
</script>

<style>
</style>