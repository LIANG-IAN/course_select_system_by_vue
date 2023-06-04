import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import LoginView from "../views/LoginView.vue"
import CourseSearchAndSelectionView from "../views/CourseSearchAndSelectionView.vue"
import DropCourseView from "../views/DropCourseView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },{
      path: '/home',
      name: 'home',
      component: HomeView
    },{
      path: '/course-search&selection',
      name: 'courseSearchAndSelection',
      component: CourseSearchAndSelectionView
    },{
      path: '/drop-course',
      name: 'drop-course',
      component: DropCourseView
    }
  ]
})

export default router
