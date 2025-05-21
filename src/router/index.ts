// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/views/StartView.vue'
import CartView from '@/views/CartView.vue'
import FormView from '@/views/FormView.vue'
import OrderConfirmation from '@/views/OrderConfirmation.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: OrderConfirmation
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
