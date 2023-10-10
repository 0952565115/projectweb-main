import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Heal from '../views/HealPage.vue'
import Healboby from '../views/Healboby.vue'
import FoodHeal from '../views/FoodHeal.vue'
import HospitelPage from '../views/HospitelPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/registerPage.vue'






const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/heal',
    name: 'Heal',
    component: Heal
  },

  {
    path: '/healboby',
    name: 'Healboby',
    component: Healboby
  },

  {
    path: '/foodHeal',
    name: 'FoodHeal',
    component: FoodHeal
  },

  {
    path: '/hospitelPage',
    name: 'HospitelPage',
    component: HospitelPage
  },

  {
    path: '/loginPage',
    name: 'LoginPage',
    component: LoginPage
  },

  {
    path: '/registerPage',
    name: 'registerPage',
    component: RegisterPage 
  },


];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
