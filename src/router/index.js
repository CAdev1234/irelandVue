import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Home1 from '../views/Home1.vue'
import Blog from '../views/Blog.vue'
import Blog1 from '../views/Blog1.vue'
import Portfolio from '../views/Portfolio'
import Portfolio1 from '../views/Portfolio1'
import Portfolio2 from '../views/Portfolio2'
import Portfolio3 from '../views/Portfolio3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home1',
    name: 'Home1',
    component: Home1
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog1',
    name: 'Blog1',
    component: Blog1
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/portfolio1',
    name: 'Portfolio1',
    component: Portfolio1
  },
  {
    path: '/portfolio2',
    name: 'Portfolio2',
    component: Portfolio2
  },
  {
    path: '/portfolio3',
    name: 'Portfolio3',
    component: Portfolio3
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
