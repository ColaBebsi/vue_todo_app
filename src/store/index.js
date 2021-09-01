import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filter: 'all',
        todoId: 3,
        todos: [
            {
                id: 1,
                title: 'Todo item 1',
                completed: false,
                editing: false,
            },
            {
                id: 2,
                title: 'Yeeet',
                completed: false,
                editing: false,
            },
        ],
    },
    getters: {
        todosFiltered(state) {
            if (state.filter === 'all') {
                return state.todos;
            } else if (state.filter === 'active') {
                return state.todos.filter((todo) => !todo.completed);
            } else if (state.filter === 'completed') {
                return state.todos.filter((todo) => todo.completed);
            }

            return state.todos;
        },
        remaining(state) {
            return state.todos.filter((todo) => !todo.completed).length;
        },
        anyRemaining(state, getters) {
            return getters.remaining !== 0;
        },
        showClearCompletedButton(state) {
            return state.todos.filter((todo) => todo.completed).length > 0;
        },
    },
    mutations: {
        addTodo(state, payload) {
            state.todos.push({
                id: payload.id,
                title: payload.title,
                completed: false,
                editing: false,
            });
        },
        removeTodo(state, id) {
            const index = state.todos.findIndex((item) => item.id === id);
            state.todos.splice(index, 1);
        },
        doneEdit(state, payload) {
            const index = state.todos.findIndex(
                (item) => item.id === payload.id
            );

            state.todos.splice(index, 1, payload);
        },
        checkAllTodos(state) {
            state.todos.forEach(
                (todo) => (todo.completed = event.target.checked)
            );
        },
        changeFilter(state, filter) {
            state.filter = filter;
        },
        clearCompleted(state) {
            state.todos = state.todos.filter((todo) => !todo.completed);
        },
    },
    actions: {},
    modules: {},
});
