<template>
  <div>
    <todo-header v-bind:titleProps="title"></todo-header>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done?"
      v-model="newTodo"
      v-on:keyup.enter="addTodo()"
    />
    <transition-group class="animate__fadeInUp animate__fadeOutDown">
      <todo-item
        v-for="(todo, index) in todosFiltered"
        v-bind:key="todo.id"
        v-bind:todoProps="todo"
        v-bind:indexProps="index"
        v-bind:checkAllProps="!anyRemaining"
      />
    </transition-group>
    <div class="extra-container">
      <todo-check-all></todo-check-all>
      <todo-items-remaining />
    </div>
    <div class="extra-container">
      <todo-filtered></todo-filtered>
      <todo-clear-completed></todo-clear-completed>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TodoHeader from "./TodoHeader.vue";
// import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";
import TodoCheckAll from "./TodoCheckAll.vue";
import TodoItemsRemaining from "./TodoItemsRemaining.vue";
import TodoFiltered from "./TodoFiltered.vue";
import TodoClearCompleted from "./TodoClearCompleted.vue";

export default {
  name: "todo-list",
  components: {
    TodoHeader,
    // TodoInput,
    TodoItem,
    TodoCheckAll,
    TodoItemsRemaining,
    TodoFiltered,
    TodoClearCompleted,
  },
  data() {
    return {
      title: "todos",
      newTodo: "",
      beforeEditCache: "",
      filter: "all",
      todoId: 3,
      todos: [
        {
          id: 1,
          title: "Todo item 1",
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: "Yeeet",
          completed: false,
          editing: false,
        },
      ],
    };
  },
  created() {
    // eventBus.$on("emitAddTodo", (todo) => this.addTodo(todo));
    // eventBus.$on("emitDoneEdit", (payload) => this.emitDoneEdit(payload));
    // eventBus.$on("emitRemoveTodo", (index) => this.removeTodo(index));
    // eventBus.$on("emitCheckAllTodos", (checked) => this.checkAllTodos(checked));
    // eventBus.$on(
    //   "emitTodosFiltered",
    //   (filter) => (this.$store.state.filter = filter)
    // );
    // eventBus.$on("emitClearCompleted", () => this.clearCompleted());
  },
  beforeDestroy() {
    // eventBus.$off("emitAddTodo");
    // eventBus.$off("emitDoneEdit");
    // eventBus.$off("emitRemoveTodo");
    // eventBus.$off("emitCheckAllTodos");
    // eventBus.$off("emitTodosFiltered");
    // eventBus.$off("emitClearCompleted");
  },
  computed: {
    ...mapGetters([
      "todosFiltered",
      "remaining",
      "anyRemaining",
      "showClearCompletedButton",
    ]),

    /* Does the same as above */

    // todosFiltered() {
    //   return this.$store.getters.todosFiltered;
    // },
    // remaining() {
    //   return this.$store.getters.remaining;
    // },
    // anyRemaining() {
    //   return this.$store.getters.anyRemaining;
    // },
    // showClearCompletedButton() {
    //   return this.$store.getters.showClearCompletedButton;
    // },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) return;

      this.$store.state.todos.push({
        id: this.todoId++,
        title: this.newTodo,
        completed: false,
      });

      this.newTodo = "";
    },
    // emitDoneEdit({ todo }) {
    //   const index = this.$store.state.todos.findIndex((item) => {
    //     return item.id === todo.id;
    //   });

    //   this.$store.state.todos.splice(index, 1, todo);
    // },
    // removeTodo(index) {
    //   this.$store.state.todos.splice(index, 1);
    // },
    // checkAllTodos() {
    //   this.$store.state.todos.forEach(
    //     (todo) => (todo.completed = event.target.checked)
    //   );
    // },
    // clearCompleted() {
    //   this.$store.state.todos = this.$store.state.todos.filter(
    //     (todo) => !todo.completed
    //   );
    // },
  },
};
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");

.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
  }
}

.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* animation-duration: .3s; */
}

.todo-item-left {
  display: flex;
  align-items: center;
}

.todo-item-title {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}

.todo-item-edit {
  font-size: 22px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;

  &:focus {
    outline: 0;
  }
}

.remove-todo-item {
  cursor: pointer;
  margin-left: 14px;

  &:hover {
    color: black;
  }
}

.completed {
  text-decoration: line-through;
  color: grey;
}

.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;

  & input {
    margin-right: 12px;
  }
}

button {
  font-size: 14px;
  padding: 4px 12px;
  margin-right: 4px;
  background-color: white;
  appearance: none;
  border: 1px solid lightgreen;

  &:hover {
    background-color: lightgreen;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
}

.active {
  background: lightgreen;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
