<template>
  <div>
    <h2 class="todo-list-header">todo-list</h2>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done?"
      v-model="newTodo"
      v-on:keyup.enter="addTodo()"
    />
    <div class="todo-item" v-for="(todo, index) in todos" v-bind:key="todo.id">
      <div class="todo-item-title">
        {{ todo.title }}
      </div>
      <div class="remove-todo-item" v-on:click="removeTodo(index)">&times;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {
      newTodo: "",
      todoId: 3,
      todos: [
        {
          id: 1,
          title: "Todo item 1",
          completed: false,
        },
        {
          id: 2,
          title: "Yeeet",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) return;

      this.todos.push({
        id: this.todoId++,
        title: this.newTodo,
        completed: false,
      });

      this.newTodo = "";
    },
    removeTodo(index) {
        this.todos.splice(index, 1)
    }
  },
};
</script>

<style lang="scss">
.todo-list-header {
  text-align: center;
}

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
}

.remove-todo-item {
    cursor: pointer;
    margin-left: 14px;

    &:hover {
        color: black;
    }
}
</style>
