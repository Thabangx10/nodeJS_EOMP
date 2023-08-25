<template>
    <div>
      <h2>Product Details</h2>
      <div class="product-details">
        <div class="row">
          <div class="col-md-6">
            <img :src="product.prodUrl" :alt="product.prodName" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h3>{{ product.prodName }}</h3>
            <p><strong>Price:</strong> ${{ product.amount }}</p>
            <p><strong>Description:</strong> {{ product.proddesc }}</p>
            <!-- Add more product details here as needed -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: null,
      };
    },
    mounted() {
      // Access the product ID from the route parameters
      const productId = this.$route.params.id;
  
      // Fetch the details of the selected product based on the ID
      // You can use this ID to query your store or API
      // For example, if you're using Vuex:
      const product = this.$store.state.Products.find((p) => p.prodID === productId);
  
      if (product) {
        this.product = product;
      } else {
        // Handle the case where the product with the specified ID is not found
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles for the product details page here */
  .product-details {
    margin-top: 20px;
  }
  
  .product-details img {
    max-width: 100%;
  }
  </style>  