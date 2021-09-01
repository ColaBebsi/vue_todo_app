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
    mutations: {},
    actions: {},
    modules: {},
});
