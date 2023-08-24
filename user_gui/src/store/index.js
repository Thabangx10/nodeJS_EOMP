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
    setUsers(state, value) {
      state.users = value;
    },

    // setUser state
    setUser(state, value) {
      state.User = value
    },

    // setProduct state 
    setProducts(state, value) {
      state.Products = value
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

    // async fetchUser

    async fetchUser({ commit }) {
      commit('setSpinner', true);
      try {
        const response = await axios.get(`${Url}user`);
        const user = response.data.user;
        commit('setUser', user);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        commit('setSpinner', false);
      }
    },


    async fetchUsers({ commit }) {
      commit('setSpinner', true);
      try {
        const response = await axios.get(`${Url}users`);
        const users = response.data.results;
        commit('setUsers', users);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        commit('setSpinner', false);
      }
    },

    // async fetchProduct
    async fetchProduct({ commit }) {
      commit('setSpinner', true);
      try {
        const response = await axios.get(`${Url}product`);
        const product = response.data.product;
        commit('setProduct', product);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        commit('setSpinner', false);
      }
    },

    // async fetchProducts

    async fetchProducts({ commit }) {
      commit('setSpinner', true);
      try {
        const response = await axios.get(`${Url}products`);
        const products = response.data.results;
        commit('setProducts', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        commit('setSpinner', false);
      }
    },
    async deleteUser(context, id){
      try {
        const {msg} = (await axios.delete(`${Url}user/${id}`)).data
        if(msg) {
          const updatedUsers = state.users.filter(user => user.userID !== id);
          commit('setUsers', updatedUsers);
        }
      } catch (error) {
          console.error('Error deleting user:', error);
      }
    }
  },
  modules: {
  },
})