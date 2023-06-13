import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'latex-doc',
    component: () => import('../views/LatexDoc.vue'),
    meta: {
      title: 'LatexIcon文档',
    },
  },
  {
    path: '/try',
    name: 'latex-try',
    component: () => import('../views/LatexTry.vue'),
    meta: {
      title: 'LatexIcon Try',
    },
  },
  {
    path: '/editor',
    name: 'latex-editor',
    component: () => import('../views/TestLatexEditor.vue'),
  },
]

export const constRoutes = routes.filter(i => i.meta?.isConstRoute)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.afterEach((to, from) => {
  document.title = to.meta.title || 'latexIcon'
})

export default router
