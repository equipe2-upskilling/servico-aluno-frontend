import { defineStore } from 'pinia'

import { fetchWrapper } from '@/helpers'

import router from '../router'

const baseUrl = `${import.meta.env.VITE_API_URL}`

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  actions: {
    async login(email, password) {
      const user = await fetchWrapper.post(`${baseUrl}/login`, { email, password })

      this.user = user

      localStorage.setItem('user', JSON.stringify(user))

      router.push(this.returnUrl || '/')
      //router.go()
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
      router.push('/login')
      router.go(0)
    }
  }
})
