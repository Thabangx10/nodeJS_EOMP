import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '@/views/AdminView'
import ProductView from '@/views/ProductView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path:'/users',
    name:'users',
    component: () => import('@/views/UsersView.vue')

  },
  {
    path:'/product',
    name:'product',
    component: ProductView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
