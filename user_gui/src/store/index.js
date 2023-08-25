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

    addProduct(state, data) {
      state.Products = data
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

    async createProduct(context, newProd) {
      try {
        const { data } = await axios.post(`${Url}products`, newProd);
        context.commit("addProduct", data.result);
        location.reload()
      } catch (e) {
        context.commit("setMsg", "An error has occurred");
      }
    },

    // async fetchUser

    async fetchUser({ commit }) {
      commit('setSpinner', true);
      try {
        const response = await axios.get(`${Url}user/${id}`);
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
        const response = await axios.get(`${Url}product/${id}`);
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
    //delete user from database
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
    },
    //delete product from database
    async deleteProduct(context, id){
      try {
        const {msg} = (await axios.delete(`${Url}product/${id}`)).data
        if(msg) {
          const updatedProducts = state.Products.filter(product => Product.prodID !== id);
          commit('setProducts', updatedProducts);
          
        }
      } catch (error) {
          console.error('Error deleting user:', error);
      }
    },

  },
  modules: {
  },
})