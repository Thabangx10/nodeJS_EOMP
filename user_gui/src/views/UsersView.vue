<template>
    <div class="container">
      <nav-bar/>
      <div class="row">
        <h2 class="display-2">Users</h2>
      </div>
      <div class="row justify-content-center gap-3">
        <div v-for="user in users" class="card" style="width: 18rem;" :key="user.userID">
          <img :src="user.Userpic" class="card-img-top" :alt="user.firstName + ' ' + user.lastName">
          <div class="card-body">
            <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
            <p class="card-text">
              <span>Email address: {{ user.emailAdd }}</span>
            </p>
            <a href="#" class="btn btn-primary">DELETE</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  
  export default {
    components: { NavBar },
    computed: {
      users() {
        return this.$store.state.users;
      },
    },
    mounted() {
      this.$store.dispatch('fetchUsers', {
        payload: {
        },
      });
    },
  };
  </script>
  
  <style scoped>
 
  </style>