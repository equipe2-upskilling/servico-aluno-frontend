import { defineStore } from 'pinia'

import { fetchWrapper } from '@/helpers'

import router from '../router'

// const baseUrl = `${import.meta.env.VITE_API_URL}`
const baseUrl = `https://localhost:7194`

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user')),
    returnUrl: null
  }),
  actions: {
    async login(username, password) {
      const user = await fetchWrapper.post(`${baseUrl}/login`, { username, password })
      this.user = user
      
      const userInfo = await fetchWrapper.get(
        `https://localhost:7264/GetStudentByEmail?username=${user.simpleLogged.email}`
      )

      const userObjt = {
        username: userInfo.username,
        id: userInfo.studentenId,
        token: user.token,
        name: userInfo.name
      }

      localStorage.setItem('user', JSON.stringify(userObjt))

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
