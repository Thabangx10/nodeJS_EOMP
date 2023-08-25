<template>
    <div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Product</button>
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createProduct">
                <div class="mb-3">
                    <label for="exampleDropdown" class="form-label">ProductID:</label>
                    <input type="watch_name" class="form-control" id="exampleDropdown" v-model="newProd.prodID" placeholder="ProdID..." required oninvalid="this.setCustomValidity('Please Enter A Watch Name :cry:')" oninput="this.setCustomValidity('')">
                </div>
                <div class="mb-3">
                    <label for="exampleDropdown" class="form-label">Product Name:</label>
                    <input type="watch_name" class="form-control" id="exampleDropdown" v-model="newProd.prodName" placeholder="Prod Name..." required oninvalid="this.setCustomValidity('Please Enter A Watch Name :cry:')" oninput="this.setCustomValidity('')">
                </div>
                <div class="mb-3">
                    <label for="exampleDropdown" class="form-label">Price:</label>
                    <input type="quantity" class="form-control" id="exampleDropdown" v-model="newProd.amount" placeholder="Price" required oninvalid="this.setCustomValidity('Please Enter A Price:cry:')" oninput="this.setCustomValidity('')">
                </div>
                <div class="mb-3">
                    <label for="exampleDropdown" class="form-label">Category:</label>
                    <input type="price" class="form-control" id="exampleDropdown" v-model="newProd.Category" placeholder="Category" required oninvalid="this.setCustomValidity('Please Enter A Category:cry:')" oninput="this.setCustomValidity('')">
                </div>
                <div class="mb-3">
                    <label for="exampleDropdown" class="form-label">Image:</label>
                    <input type="category" class="form-control" id="exampleDropdown" v-model="newProd.prodUrl" placeholder="Image" required oninvalid="this.setCustomValidity('Please Enter A Image:cry:')" oninput="this.setCustomValidity('')">
                </div>
                <div class="mb-3">
                    <label for="exampleDropdown" class="form-label">Description:</label>
                    <input type="image_url" class="form-control" id="exampleDropdown" v-model="newProd.proddesc" placeholder="product description" required oninvalid="this.setCustomValidity('Please Insert An description:cry:')" oninput="this.setCustomValidity('')">
                </div>
                <button type="submit" id="add_button_dropdown" class="btn btn-primary">add</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </div>

</template>

<script>
    export default {
        data() {
    return {
        newProd: {
          prodID:'',
          prodName: '',
          prodUrl: '',
          amount: '',
          Category: '',
          prodUrl:'',
          proddesc:''
            },
        }
    },
    methods: {
    createProduct(){
      this.$store.dispatch('createProduct', this.newProd)
        }
    }
}
</script>

<style scoped>

</style>