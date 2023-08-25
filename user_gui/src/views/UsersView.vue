<template>
  <div>
  <nav-bar/>
    <div class="container">
      

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
            <button @click="onfetch(user.userID)" type="button" class="btn btn-outline-secondary">View User</button>
            <br>
            <button @click="onDeleteUser(user.userID)" class="btn btn-outline-danger"> Delete </button>
          </div>
        </div>
      </div>
      
    </div>
    <footer-comp/>
  </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import { mapActions } from 'vuex';
import FooterComp from '../components/FooterComp.vue';

  export default {
    components: { NavBar,FooterComp },
    methods:{
        ...mapActions(['deleteUser']),
        async onDeleteUser(userID) {
            await this.deleteUser(userID);
            
        },

    },
    computed: {
      users() {
        return this.$store.state.users;
      },
    },
    mounted() {
      this.$store.dispatch('fetchUsers');
    },
  };
  </script>
  
  <style scoped>
    .btn{
      width: 50%;
      margin: 0.5rem;
    }
    .card-img-top{
      object-fit: contain;
    }
  </style>