import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebase';
Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if (auth.currentUser) {
        next()
      } else {
        window.location.replace('/login');
      }
    }
  }
]


let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
