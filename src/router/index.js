import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import UserLogin from '@/components/UserLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'user_login',

      component: () => import('../components/UserLogin.vue')
    },
    {
      path: '/create_student',
      name: 'create_student',

      component: () => import('../components/student/CreateStudent.vue')
    },
    {
      path: '/update_student',
      name: 'update_student',

      component: () => import('../components/student/UpdateStudent.vue')
    }
  ]
})

export default router
