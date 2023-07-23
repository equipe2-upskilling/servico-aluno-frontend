import { defineStore } from 'pinia'

import { fetchWrapper } from '@/helpers'

import router from '../router'

const baseUrl = `${import.meta.env.VITE_API_URL}`

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    user: {}
  }),
  actions: {
    async register(email, password, confirmPassword) {
      const user = await fetchWrapper.post(`${baseUrl}/register`, {
        email,
        password,
        confirmPassword
      })
      this.user = {
        id: 12,
        name: 'Raissa',
        email: this.user.email
      }

      localStorage.setItem('user', JSON.stringify(user))

      router.push(this.returnUrl || '/')
    }
  }
})
