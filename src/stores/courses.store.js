import { defineStore } from 'pinia'
import { fetchWrapper, objectToQueryString } from '@/helpers'

//const baseUrl = `https://localhost:7215`
const baseUrl = `https://localhost:7264`

export const useCoursesStore = defineStore({
  id: 'courses',
  state: () => ({
    course: {
      id: 0,
      name: '',
      description: '',
      duration: '',
      image: '',
      completedLessonsPercentage: 0
    },
    courses:[]
  }),
  actions: {
    async getCourses() {
        //const params = { idUser: idUser, course: idCourse }
        // const courses = await fetchWrapper.get(
        //     `${baseUrl}/all`
        // )
        const courses = await fetchWrapper.get(
            `${baseUrl}/GetAllStudentsCourses`
        )
        
        //Authorizarion: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWx1ZSI6IntcIklkXCI6MTYsXCJFbWFpbFwiOlwianVsaWFub0BlbWFpbC5jb21cIixcIlBhc3N3b3JkXCI6XCJ3U21BU3liYVpWbktreExSeHFkWTlUNUl0QzhqWW1xdWxBcWc3YUZXTHRzPVwiLFwiU2FsdFwiOlwiRnMxNmVkVDljejBSQVNxZ1BCNjRjZz09XCJ9IiwibmJmIjoxNjkwNDEwNjc5LCJleHAiOjE2OTEwMTU0NzksImlhdCI6MTY5MDQxMDY3OX0.fy_EP9sGPvGklCmov8c92YZmKPlM_CXYignVcNTD5Do"
        //const courses = await fetchWrapper.request('get');

        console.table(courses);
        //   this.course = userCourse

        this.courses = [
        {
            id: 1,
            name: 'Introduction to JavaScript',
            description: 'A beginner-friendly course on JavaScript programming.',
            duration: '30h',
            //image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            image: '/assets/imgs/player.png',
        },
        {
            id: 2,
            name: 'Introduction to JavaScript 2',
            description: 'A beginner-friendly course on JavaScript programming.',
            duration: '30h',
            //image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            image: '/assets/imgs/player.png',
        }
      ]
    }
  }
})