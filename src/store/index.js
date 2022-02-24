import Vue from 'vue';
import Vuex from 'vuex';
import API from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        todos: []
    },
    getters: {
        todos: state => state.todos
    },
    mutations: {
        addTodo(state, todoItem){
            state.todos.push(todoItem)
        },
        setTodos(state, todos){
            state.todos = todos
        }
    },
    actions: {
        async getTodos({commit}) {
            await API.getItemList().then((todos) => {
                commit("setTodos", todos)
            })
        },
        async addTodo({commit}, todoItem) {
            await API.addTodoItem(todoItem).then(() => {
                commit('addTodo', todoItem)
            })
        }
    }

})
