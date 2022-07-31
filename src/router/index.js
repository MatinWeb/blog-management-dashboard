import { createRouter, createWebHistory } from 'vue-router'
import TheLogin from '../views/TheLogin.vue'

const routes = [
  {
    path: '/',
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'TheLogin',
    component: TheLogin
  },
  {
    path: '/register',
    name: 'TheRegister',
    component: () => import('../views/TheRegister.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
