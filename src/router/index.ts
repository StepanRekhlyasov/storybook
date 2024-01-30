import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/views/auth/Auth.vue'
import ResetPassword from '@/views/auth/reset-password/ResetPassword.vue'
// import Code from '@/views/auth/code/Code.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/auth/reset-password',
      name: 'reset-password',
      component: ResetPassword
    },
    // {
    //   path: '/auth/code',
    //   name: 'code',
    //   component: Code
    // },
  ]
})

export default router
