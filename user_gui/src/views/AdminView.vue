<template>
    <div>
        <nav-bar/>
        <br>
        <br>
        <prod-modal-comp/>
        <br>
        <br>
        
        <prod-table/>
        
    </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import ProdTable from '@/components/ProdTable.vue'
import ProdModalComp from '../components/ProdModalComp.vue'
    export default {
  components: { NavBar, ProdTable,ProdModalComp },
        
    }
</script>

<style scoped>

</style>