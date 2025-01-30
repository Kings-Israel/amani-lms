export const useAuthStore = defineStore('auth', {
  state: () => ({
    userData: null as Record<string, unknown> | null,
    isLoggedIn: false,
  }),
  actions: {
    async validateToken() {
      // Your existing validateToken logic
    },
    logout() {
      useCookie('userData').value = null
      useCookie('accessToken').value = null
      this.userData = null
      this.isLoggedIn = false
      window.location.href = '/login'
    },
  },
})
