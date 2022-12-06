import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'latex-editor',
    component: () => import('../views/TestLatexEditor.vue'),
  },
  {
    path: '/doc',
    name: 'latex-doc',
    component: () => import('../views/LatexDoc.vue'),
  },
]

export const constRoutes = routes.filter(i => i.meta?.isConstRoute)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
