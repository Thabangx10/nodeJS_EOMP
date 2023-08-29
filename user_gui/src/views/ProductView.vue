<template>
  <div>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Products</h2>
      </div>
      <div class="row justify-content-center gap-3">
        <div
          v-for="product in filteredProducts"
          class="card"
          style="width: 18rem"
          :key="product.prodID"
        >
          <img
            :src="product.prodUrl"
            class="card-img-top"
            :alt="product.prodName"
            style="object-fit: contain"
          />
          <div class="card-body">
            <h5 class="card-title" style="color: gray">
              {{ product.prodName }}
            </h5>
            <p class="card-text">
              <span style="color: red">Price: ${{ product.amount }}</span>
            </p>
            <router-link
              :to="{ name: 'product1', params: { id: product.prodID } }"
            >
              <button type="button" class="btn btn-outline-success">
                BUY NOW
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.Products;
    },
    // Computed property to filter products by amount
    filteredProductsByAmount() {
      const minAmount = 10; // Set your minimum amount here
      return this.products.filter((product) => product.amount >= minAmount);
    },
    // Computed property to filter products by categories
    filteredProductsByCategory() {
      const selectedCategory = "watch, tuxedo, pants"; 
      return this.products.filter((product) =>
        product.categories.includes(selectedCategory)
      );
    },
    // Computed property to filter products by name
    filteredProductsByName() {
      const searchName = "Rolex, Fabiani pants, Tux";
      return this.products.filter((product) =>
        product.prodName.toLowerCase().includes(searchName.toLowerCase())
      );
    },
    // Computed property to get the intersection of all filters
    filteredProducts() {
      const filteredByAmount = this.filteredProductsByAmount;
      const filteredByCategory = this.filteredProductsByCategory;
      const filteredByName = this.filteredProductsByName;

      // Return the intersection of all filters
      return filteredByAmount
        .filter((product) => filteredByCategory.includes(product))
        .filter((product) => filteredByName.includes(product));
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
.card {
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.25rem;
}

.card-text span {
  font-weight: bold;
}

.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: #fff;
}
</style>
