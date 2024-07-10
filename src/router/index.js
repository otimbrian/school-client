import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import store from '@/store/store'
import LocalStorage from '@/service/local'
// import { useStore } from 'vuex'
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

      component: () => import('../components/student/StudentList.vue')
    },
    {
      path: '/edit_student',
      name: 'edit_student',

      component: () => import('../components/student/UpdateStudent.vue')
    },
    {
      path: '/me',
      name: 'me',

      component: () => import('../components/user/ViewUser.vue')
    },
    {
      path: '/view_student',
      name: 'view_student',

      component: () => import('@/components/student/ViewStudents.vue')
    },
    {
      path: '/recover_password',
      name: 'recover_password',

      component: () => import('@/components/user/EmailToRecoverPassword.vue')
    },

    {
      path: '/register',
      name: 'register_user',

      component: () => import('@/components/user/RegisterUser.vue')
    },
    {
      path: '/create_student',
      name: 'create_student',

      component: () => import('@/components/student/CreateStudent.vue')
    }
  ]
})

router.beforeEach(
  async (to) => {
    const publicPage = ['/login']
    const authRequired = !publicPage.includes(to.path)

    const user = LocalStorage.getFromLocalStorage(LocalStorage.name)

    if (authRequired && !user) {
      // auth.returnUrl = to.fullPath
      return '/login'
    }
  }
)
export default router
