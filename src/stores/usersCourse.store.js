import { defineStore } from 'pinia'
import { fetchWrapper, objectToQueryString } from '@/helpers'

const baseUrl = `${import.meta.env.VITE_API_URL}`

export const useUsersCoursesStore = defineStore({
  id: 'userCourses',
  state: () => ({
    course: {
      id: 0,
      name: '',
      description: '',
      duration: '',
      image: '',
      completedLessonsPercentage: 0
    },
    listLessons: [],
    calcPercentage: 0,
    lesson: {
      id: 0,
      idCourse: 0,
      lessonTitle: '',
      lessonDescription: '',
      lessonVideo: '',
      isCompleted: false
    }
  }),
  actions: {
    updateCalcPercentage() {
      const completedLessons = this.listLessons.filter((lesson) => lesson.isCompleted)
      this.calcPercentage = Math.round((completedLessons.length / this.listLessons.length) * 100)
    },
    markLessonCompleted(lessonId) {
      const lessonToMarkCompleted = this.listLessons.find((lesson) => lesson.id === lessonId)
      if (lessonToMarkCompleted) {
        lessonToMarkCompleted.isCompleted = true
        this.updateCalcPercentage()
      }
    },
    async getUserCourse(idUser, idCourse) {
      const params = { idUser: idUser, course: idCourse }
      //   const userCourse = await fetchWrapper.get(
      //     `${baseUrl}/user/course/${objectToQueryString(params)}`
      //   )

      //   this.course = userCourse
      this.course = {
        id: 1,
        name: 'Introduction to JavaScript',
        description: 'A beginner-friendly course on JavaScript programming.',
        duration: '30h',
        image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        completedLessonsPercentage: 50
      }
      //   const courseLessons = await fetchWrapper.get(
      //     `${baseUrl}/user/course/lessons/${objectToQueryString(params)}`
      //   )
      //   this.listLessons = courseLessons
      this.listLessons = [
        {
          id: 1,
          idCourse: 101,
          lessonTitle: 'Introduction to JavaScript',
          lessonDescription: 'Learn the basics of JavaScript programming language.',
          lessonVideo: 'https://example.com/js_intro',
          isCompleted: false
        },
        {
          id: 2,
          idCourse: 101,
          lessonTitle: 'Variables and Data Types',
          lessonDescription: 'Understand how to work with variables and data types in JavaScript.',
          lessonVideo: 'https://example.com/js_variables',
          isCompleted: false
        },
        {
          id: 3,
          idCourse: 101,
          lessonTitle: 'Conditional Statements',
          lessonDescription: 'Learn how to use if-else statements in JavaScript.',
          lessonVideo: 'https://example.com/js_conditionals',
          isCompleted: false
        }
      ]
    }
  }
})
//   course: {
//     type: Object,
//     required: true,
//     default: () => ({
//       id: 1,
//       name: 'Introduction to JavaScript',
//       description: 'A beginner-friendly course on JavaScript programming.',
//       duration: '30h',
//       image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
//       completedLessonsPercentage: 50
//     })
//   },
//   lessons: {
//     type: Array,
//     required: true,
//     default: () => [
//       {
//         id: 1,
//         idCourse: 101,
//         lessonTitle: 'Introduction to JavaScript',
//         lessonDescription: 'Learn the basics of JavaScript programming language.',
//         lessonVideo: 'https://example.com/js_intro',
//         isCompleted: true
//       },
//       {
//         id: 2,
//         idCourse: 101,
//         lessonTitle: 'Variables and Data Types',
//         lessonDescription: 'Understand how to work with variables and data types in JavaScript.',
//         lessonVideo: 'https://example.com/js_variables',
//         isCompleted: true
//       },
//       {
//         id: 3,
//         idCourse: 101,
//         lessonTitle: 'Conditional Statements',
//         lessonDescription: 'Learn how to use if-else statements in JavaScript.',
//         lessonVideo: 'https://example.com/js_conditionals',
//         isCompleted: true
//       }
//     ]}
