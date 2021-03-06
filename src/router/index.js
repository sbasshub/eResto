import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import foods from '../views/foods.vue'
import foodDetails from '../views/foodDetails.vue'
import bucket from '../views/bucket.vue'
import succesOrder from '../views/succesOrder.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foods',
    name: 'Foods',
    component: foods
  },
  {
    path: '/foods/:id',
    name: 'foodDetails',
    component: foodDetails
  },
  {
    path: '/bucket',
    name: 'bucket',
    component: bucket
  },
  {
    path: '/succesOrder',
    name: 'succesOrder',
    component: succesOrder
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router