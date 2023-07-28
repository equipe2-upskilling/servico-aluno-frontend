import { defineStore } from 'pinia'

import { fetchWrapper } from '@/helpers'

import router from '../router'

const baseUrl = `https://localhost:7264`

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    user: {
      name: '',
      id: '',
      email: ''
    }
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
      router.push(this.returnUrl || '/')
    },
    async getUserInformation(email) {
      const userInfo = await fetchWrapper.get(`${baseUrl}/GetStudentByEmail?username=${email}`)

      this.user = {
        name: userInfo.name,
        id: userInfo.studentenId,
        email: userInfo.username
      }
    }
  }
})
