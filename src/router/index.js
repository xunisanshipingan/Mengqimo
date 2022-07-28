import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 主页自动跳转
  {
    path: '/',
    component: () => import('@/views/BlogList.vue')
  },
  // 摘叶飞花
  {
    path: '/anthology',
    name: 'anthology',
    component: () => import('@/views/Anthology.vue')
  },
  // 浮生四梦
  {
    path: '/bloglist',
    name: 'bloglist',
    component: () => import('@/views/BlogList.vue')
  },
  // 姻缘一线
  {
    path: '/subscribe',
    name: 'subscribe',
    component: () => import('@/views/Subscribe.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
