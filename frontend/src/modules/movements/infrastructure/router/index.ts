import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/modules/home/infrastructure/views/LandingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingView
  },
  {
    path: '/movements',
    name: 'movements',
    component: () => import('@/modules/movements/infrastructure/views/MovementsListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router