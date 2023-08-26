<template>
  <div>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Products</h2>
      </div>
      <div class="row justify-content-center gap-3">
        <div
          v-for="product in products"
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
            <router-link :to="{ name: 'product1', params: { id: product.prodID } }">
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
      const selectedCategory = "Electronics"; // Set your selected category here
      return this.products.filter((product) =>
        product.categories.includes(selectedCategory)
      );
    },
    // Computed property to filter products by name
    filteredProductsByName() {
      const searchName = "Product Name"; // Set your search name here
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
