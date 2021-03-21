import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    path: '/films',
    name: 'Films',
    component: () => import('../views/Films.vue'),
    redirect: '/films/nowPlaying',
    children: [
      {
        path: 'nowPlaying',
        component: () => import('../components/Films/Filmlistcontent.vue')
      },
      {
        path: 'comingSoon',
        component: () => import('../components/Films/Filmlistcontent.vue')
      }
    ]
  },
  {
    path: '/cinemas',
    name: 'Cinemas',
    component: () => import('../views/Cinemas.vue')
  },
  {
    path: '/center',
    name: 'Center',
    component: () => import('../views/Center.vue')
  },
  {
    path: '/details/:myid',
    name: 'Details',
    component: () => import('../components/Films/Details.vue')
  },
  {
    path: '*',
    redirect: '/films/nowPlaying'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
