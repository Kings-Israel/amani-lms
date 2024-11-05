import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { canNavigate } from '@layouts/plugins/casl'

const base_url = process.env.NODE_ENV === 'production' ? '/loandisk' : '/'

const router = createRouter({
  history: createWebHistory(base_url),
  routes: [
    ...setupLayouts(routes),
  ],
})

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

export default router
