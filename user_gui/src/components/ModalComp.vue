<template>
    <div>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add User</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">New User</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">firstName:</label>
                            <input type="text" class="form-control" id="user-name">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">lastName:</label>
                            <input type="text" class="form-control" id="Userlast-name">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">UserAge:</label>
                            <input type="text" class="form-control" id="User-Age">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">UserGender:</label>
                            <input type="text" class="form-control" id="Gender">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">UserEmail:</label>
                            <input type="text" class="form-control" id="Email">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Password:</label>
                            <input type="text" class="form-control" id="Password">
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">UserImage_Link:</label>
                            <input type="text" class="form-control" id="Img-link">
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
            </div>
         </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>