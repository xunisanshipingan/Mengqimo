import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 摘叶飞花
  {
    path: '/anthology',
    name: 'anthology',
    component: () => import('@/views/Anthology.vue')
  },
  // 日常随笔
  {
    path: '/bloglist',
    name: 'bloglist',
    component: () => import('@/views/BlogList.vue')
  },
  // 如何订阅
  {
    path: '/subscribe',
    name: 'subscribe',
    component: () => import('@/views/Subscribe.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
