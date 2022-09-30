

import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Pet from '../components/Pet';
import Home from '../components/Home';





const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/user/login',
    name: 'login',
    component: Login
  },

  {
    path: '/user/signup',
    name: 'signup',
    component: SignUp
  },

  {
    path: '/user/pet',
    name: 'pet',
    component: Pet
  },





]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
