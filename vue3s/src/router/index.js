import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/CourseList',
    name: 'CourseList',
    component: () => import( '../views/CourseList.vue')
  },
  {
    path: '/CreateCourse',
    name: 'CreateCourse',
    component: () => import( '../views/CreateCourse.vue')
  },
  {
    path: '/EditCourse/:id',
    name: 'EditCourse',
    component: () => import( '../views/EditCourse')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
