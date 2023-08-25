<template>
    <div>
        <nav-bar/>
        <div class="row">
            <div class="col">
                <img src="https://i.postimg.cc/VvBZmGBw/Tailor-On-Ten-Kingsman-1-a02198bd-10aa-4720-a23b-8a3aae108cf9.jpg" alt="" class="img-left">
            </div>
            <div class="col">
                <h2>{{ product.prodName }}</h2>
                <p>{{ product.proddesc }}</p>
            </div>
        </div>
        <footer-comp/>
    </div>
</template>

<script>
import FooterComp from '../components/FooterComp.vue';
import NavBar from '../components/NavBar.vue'
    export default {
  components: { NavBar, FooterComp },
  mounted() {
      this.$store.dispatch('fetchProducts');
    },
    }
</script>

<style scoped>
    .row{
        width: 80%;
        margin: 5%;
    }
</style>