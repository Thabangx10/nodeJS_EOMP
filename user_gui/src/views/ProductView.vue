<template>
  <div>
  <nav-bar/>
    <div class="container">
      
      <div class="row">
        <h2 class="display-2">Products</h2>
      </div>
      <div class="row justify-content-center gap-3">

        <div v-for="product in products" class="card" style="width: 18rem;" :key="product.prodID">
          <img :src="product.prodUrl" class="card-img-top" :alt="product.prodName" style="object-fit:contain">
          <div class="card-body"> 
            <h5 class="card-title" style="color:gray">{{ product.prodName }}</h5>
            <p class="card-text">
              <span style="color:red">Price: ${{ product.amount }}</span>
            </p>
            <a href="/product:id">
            <button type="button" class="btn btn-outline-success">BUY NOW</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <footer-comp/>
  </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import FooterComp from '@/components/FooterComp.vue';
  export default {
    components: { NavBar,FooterComp },
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
    },
  };
  </script>
  
  <style scoped>

  </style>
  <!-- style done -->