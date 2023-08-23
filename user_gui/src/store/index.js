import { createStore } from 'vuex'
import axios from 'axios'

const Url = "https://gentlemen-3h79.onrender.com/"

export default createStore({
  state: {
    users: null,
    User: null,
    Product: null,
    Products: null,
    spinner: false,
    token: null,
    msg: null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setProduct(state, value) {
      state.Product = value;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get(`${Url}users`);
        const users = response.data.results;
        commit('setUsers', users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    
  },
  modules: {
  },
})