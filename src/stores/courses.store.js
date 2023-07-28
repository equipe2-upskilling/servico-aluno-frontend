import { defineStore } from 'pinia'
import { fetchWrapper, objectToQueryString } from '@/helpers'

const baseUrl = `https://localhost:7215`
// const baseUrl = `https://localhost:7264`

export const useCoursesStore = defineStore({
  id: 'courses',
  state: () => ({
    course: null,
    courses: []
  }),
  actions: {
    async getCourses() {
      const courses = await fetchWrapper.get(`${baseUrl}/all`)

      this.courses = courses
    },
    async getCourseById(id) {
      const course = await fetchWrapper.get(`${baseUrl}/api/Course/${id}`)
      this.course = course
    }
  }
})
