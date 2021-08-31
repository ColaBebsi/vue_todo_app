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
    <transition-group name="fade" class="animate__fadeInUp animate__fadeOutDown" >
      <div
        class="todo-item"
        v-for="(todo, index) in todosFiltered"
        v-bind:key="todo.id"
      >
        <div class="todo-item-left">
          <input type="checkbox" v-model="todo.completed" />
          <div
            v-if="!todo.editing"
            class="todo-item-title"
            v-on:dblclick="editTodo(todo)"
            v-bind:class="{ completed: todo.completed }"
          >
            {{ todo.title }}
          </div>
          <input
            v-else
            class="todo-item-edit"
            type="text"
            v-model="todo.title"
            v-on:blur="doneEdit(todo)"
            v-on:keyup.enter="doneEdit(todo)"
            v-on:keyup.esc="cancelEdit(todo)"
            v-focus
          />
        </div>
        <div class="remove-todo-item" v-on:click="removeTodo(index)">
          &times;
        </div>
      </div>
    </transition-group>
    <div class="extra-container">
      <div>
        <label
          ><input
            type="checkbox"
            v-bind:checked="!anyRemaining"
            v-on:change="checkAllTodos()"
          />Check All</label
        >
      </div>
      <div>{{ remaining }} items left</div>
    </div>
    <div class="extra-container">
      <div>
        <button
          v-bind:class="{ active: filter == 'all' }"
          v-on:click="filter = 'all'"
        >
          All
        </button>
        <button
          v-bind:class="{ active: filter == 'active' }"
          v-on:click="filter = 'active'"
        >
          Active
        </button>
        <button
          v-bind:class="{ active: filter == 'completed' }"
          v-on:click="filter = 'completed'"
        >
          Completed
        </button>
      </div>

      <div>
        <transition name="fade">
          <button v-if="showClearCompletedButton" v-on:click="clearCompleted()">
            Clear Completed
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {
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
  directives: {
    focus: {
      inserted: (el) => {
        el.focus();
      },
    },
  },
  computed: {
    todosFiltered() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "active") {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.filter === "completed") {
        return this.todos.filter((todo) => todo.completed);
      }

      return this.todos;
    },
    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining !== 0;
    },
    showClearCompletedButton() {
      return this.todos.filter((todo) => todo.completed).length > 0;
    },
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
    editTodo(todo) {
      this.beforeEditCache = todo.title;
      todo.editing = true;
    },
    doneEdit(todo) {
      if (todo.title.trim() === "") {
        todo.title = this.beforeEditCache;
      }

      todo.editing = false;
    },
    cancelEdit(todo) {
      todo.title = this.beforeEditCache;
      todo.editing = false;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    checkAllTodos() {
      this.todos.forEach((todo) => (todo.completed = event.target.checked));
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
  },
};
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");

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
