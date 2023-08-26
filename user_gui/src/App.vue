<template>
  <NavBar />

  <router-view />

<FooterComp/>
</template>

<script>
export default {
  components: {
    NavBar,
    FooterComp,
  }
};
</script>
