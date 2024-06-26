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
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/login',
      name: 'user_login',

      component: () => import('../components/UserLogin.vue')
    },
    {
      path: '/students',
      name: 'students',

      component: () => import('../components/student/ViewStudents.vue')
    },
    {
      path: '/updateStudent',
      name: 'updateStudent',

      component: () => import('../components/student/UpdateStudent.vue')
    },
    {
      path: '/me',
      name: 'me',

      component: () => import('../components/user/ViewUser.vue')
    }
  ]
})

export default router
