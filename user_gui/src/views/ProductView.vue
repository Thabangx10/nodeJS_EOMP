<template>
    <div class="container">
      <nav-bar />
      <div class="row">
        <h2 class="display-2">Products</h2>
      </div>
      <div class="row justify-content-center gap-3">
        <!-- Display a list of products -->
        <div v-for="product in products" class="card" style="width: 18rem;" :key="product.prodID">
          <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName">
          <div class="card-body">
            <h5 class="card-title">{{ product.prodName }}</h5>
            <p class="card-text">
              <span>Price: ${{ product.amount }}</span>
            </p>
            <!-- Add buttons for editing and deleting products -->
            <button @click="editProduct(product)" class="btn btn-primary">EDIT</button>
            <button @click="deleteProduct(product.prodID)" class="btn btn-danger">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  
  export default {
    components: { NavBar },
    computed: {
      products() {
        return this.$store.state.Products;
      },
    },
    mounted() {
      this.$store.dispatch('fetchProducts');
    },
    methods: {
      editProduct(prodID) {

    },
      deleteProduct(prodID) {

    },
    },
  };
  </script>
  
  <style scoped>

  </style>
  