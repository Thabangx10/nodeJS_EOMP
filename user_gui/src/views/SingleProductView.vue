<template>
  <div>
    <h2>Product Details</h2>
    <div class="product-details" v-if="product">
      <div class="row">
        <div class="col-md-6">
          <img
            :src="product.prodUrl"
            :alt="product.prodName"
            class="img-fluid"
          />
        </div>
        <div class="col-md-6">
          <h3>{{ product.prodName }}</h3>
          <p><strong>Price:</strong> ${{ product.amount }}</p>
          <p><strong>Description:</strong> {{ product.proddesc }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.Product;
    },
  },
  mounted() {
    const Id = this.$route.params.id;

    this.$store.dispatch("fetchProduct", Id);
  },
};
</script>

<style scoped>
.product-details {
  margin-top: 20px;
}

.product-details img {
  max-width: 100%;
}
</style>
