<template>
  <NavBar />

  <router-view />

<FooterComp/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: {
    NavBar,
    FooterComp,
  },
};
</script>
