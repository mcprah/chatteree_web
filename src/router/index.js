import { createRouter, createWebHistory } from 'vue-router'
import SignView from '../views/SignView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SignView
    },
    {
      path: '/verify-pin',
      name: 'verify',
      component: () => import('../views/VerificationView.vue')
    }
  ]
})

export default router
