<template>
    <div class="container">
      <nav-bar />
      <div class="row">
        <h2 class="display-2">Products</h2>
      </div>
      <div class="row justify-content-center gap-3">
        <!-- Display a list of products -->
        <div v-for="product in products" class="card" style="width: 18rem;" :key="product.productId">
          <img :src="product.image" class="card-img-top" :alt="product.name">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              <span>Price: ${{ product.price }}</span>
            </p>
            <!-- Add buttons for editing and deleting products -->
            <button @click="editProduct(product)" class="btn btn-primary">EDIT</button>
            <button @click="deleteProduct(product.productId)" class="btn btn-danger">DELETE</button>
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
      editProduct(product) {

    },
      deleteProduct(productId) {

    },
    },
  };
  </script>
  
  <style scoped>

  </style>
  