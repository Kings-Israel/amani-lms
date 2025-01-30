import { createFetch } from '@vueuse/core'
import { destr } from 'destr'
import { useAuthStore } from '@/store/auth'

export const useApi = createFetch({
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  fetchOptions: {
    headers: {
      Accept: 'application/json',
    },
  },
  // options: {
  //   refetch: true,
  //   async beforeFetch({ options, url }) {
  //     // 1) Grab the token from cookies
  //     const accessToken = useCookie('accessToken').value

  //     // 2) Skip token logic on login or register
  //     if (url.includes('/login') || url.includes('/register') || url.includes('get/generated/inquiry') || url.includes('get/countries') || url.includes('get/categories'))
  //       return { options }

  //     // 3) If no token, force them to /login
  //     if (!accessToken) {
  //       const authStore = useAuthStore()

  //       authStore.logout()

  //       window.location.href = '/login'
  //       throw new Error('No access token available')
  //     }

  //     // 4) Attach the Authorization header
  //     options.headers = {
  //       ...options.headers,
  //       Authorization: `Bearer ${accessToken}`,
  //     }

  //     return { options }
  //   },

  //   afterFetch(ctx) {
  //     const { data, response } = ctx

  //     // 5) Optionally parse the data with destr
  //     let parsedData = null
  //     try {
  //       parsedData = destr(data)
  //     }
  //     catch (error) {
  //       console.error('[Fetch] Error destructuring:', error)
  //     }

  //     return { data: parsedData, response }
  //   },

  //   async onFetchError(ctx) {
  //     const { response } = ctx

  //     // 6) If the server responds 401, probably means token is invalid or expired
  //     if (response && response.status === 401) {
  //       const authStore = useAuthStore()

  //       authStore.logout()

  //       window.location.href = '/login'
  //       console.log('Valid Session')
  //     }

  //     return ctx
  //   },
  // },
})
