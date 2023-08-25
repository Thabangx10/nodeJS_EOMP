import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '@/views/ProductView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  },
  {
    path:'/product:id',
    name:'product1',
    component: () => import('@/views/SingleProductView.vue')
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
