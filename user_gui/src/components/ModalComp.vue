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
              <div>
                <form @submit.prevent="createUser">
                  <input v-model="addUser.firstName" placeholder="First Name" />
                  <input v-model="addUser.lastName" placeholder="Last Name" />
                  <input v-model="addUser.emailAdd" placeholder="Email" />
                  <input v-model="addUser.Userpic" placeholder="Image URL" />
                  <button type="submit">Create User</button>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        addUser: {
          firstName: '',
          lastName: '',
          emailAdd: '',
          Userpic: '',
        },
      };
    },
    methods: {
      async createUser() {
        try {
          const response = await axios.post(`${Url}users`, this.addUser);
          console.log('User created:', response.data);
          this.addUser = {
            firstName: '',
            lastName: '',
            emailAdd: '',
            Userpic: '',
          };
        } catch (error) {
          console.error('Error creating user:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your component styles */
  </style>