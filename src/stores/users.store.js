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
    async register(username, password, name, address) {
      const user = await fetchWrapper.post(`${baseUrl}/CreateStudentWithLogin`, {
        username,
        password,
        name,
        address
      })

      this.user = user

        console.log("", user)
      router.push(this.returnUrl || '/')
    }
  }
})
