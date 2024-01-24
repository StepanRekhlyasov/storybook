import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Auth
    },
  ]
})

export default router
