// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import LandingPage from '../components/LandingPage.vue'
// import ProductPage1 from '../components/ProductPage1.vue'
// import ProductPage2Modified from '../components/ProductPage2Modified.vue'
// import ProductCheckout from '../components/ProductCheckout.vue'

import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import ProductPage1 from '../components/ProductPage1.vue'
import ProductPage2Modified from '../components/ProductPage2Modified.vue'
import ProductCheckout from '../components/ProductCheckout.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/productpage1',
    name: 'ProductPage1',
    component: ProductPage1,
  },
  {
    path: '/productpage2modified',
    name: 'ProductPage2Modified',
    component: ProductPage2Modified,
  },
  {
    path: '/productcheckout/:id',
    name: 'ProductCheckout',
    component: ProductCheckout,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

// Vue.use(VueRouter)
// const routes = [
//   {
//     path: '/',
//     name: 'LandingPage',
//     component: LandingPage,
//   },
//   {
//     path: '/productpage1',
//     name: 'ProductPage1',
//     component: ProductPage1,
//   },
//   {
//     path: '/productpage2',
//     name: 'ProductPage2Modified',
//     component: ProductPage2Modified,
//   },
//   {
//     path: '/productcheckout',
//     name: 'ProductCheckout',
//     component: ProductCheckout,
//   },
// ]

// const router = new VueRouter({
//   mode:history,
//   base:process.env.BASE_URL,
//   routes,
// })

// export default router
