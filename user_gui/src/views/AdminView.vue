<template>
    <div>
        <nav-bar/>
        <br>
        <br>
        <modal-comp/>
        <table-comp/>
        <br>
        <br>
        
        <prod-table/>
        
    </div>
</template>

<script>
import TableComp from '@/components/TableComp.vue'
import ModalComp from '@/components/ModalComp.vue'
import NavBar from '@/components/NavBar.vue'
import ProdTable from '@/components/ProdTable.vue'
    export default {
  components: { TableComp, ModalComp, NavBar, ProdTable },
        
    }
</script>

<style scoped>

</style>