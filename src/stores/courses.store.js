import { defineStore } from 'pinia'
import { fetchWrapper, objectToQueryString } from '@/helpers'

const baseUrl = `https://localhost:7215`
// const baseUrl = `https://localhost:7264`

export const useCoursesStore = defineStore({
  id: 'courses',
  state: () => ({
    course: {
      courseId: 1,
      name: 'APIs Rest + SQL',
      description: 'Curso para criação de apis integradas a banco de dados',
      duration: 6,
      price: 59.99,
      enrollmentstatusid: 1,
      coverImg: null,
      teacherId: 0,
      lessons: [
        {
          lessonid: 1,
          courseid: 1,
          name: 'Aula 1',
          description: 'primeira aula 1',
          lessonurl: 'https://www.youtube.com/embed/Ofktsne-utM',
          image:
            'https://i.ytimg.com/vi/Ofktsne-utM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCjd6PHMa_VAlc3d8JoCzQtMOuEjA',
          registerdate: '2023-07-26T22:40:34.268522'
        },
        {
          lessonid: 2,
          courseid: 1,
          name: 'Aula 2 aula',
          description: 'segunda aula 2',
          lessonurl: 'https://www.youtube.com/embed/eI4an8aSsgw',
          image:
            'https://i.ytimg.com/vi/Ofktsne-utM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCjd6PHMa_VAlc3d8JoCzQtMOuEjA',
          registerdate: '2023-07-26T22:40:56.765058'
        },
        {
          lessonid: 3,
          courseid: 1,
          name: 'Aula 3',
          description: 'terceira aula 3',
          lessonurl: 'https://www.youtube.com/embed/Ofktsne-utM',
          image:
            'https://i.ytimg.com/vi/Ofktsne-utM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCjd6PHMa_VAlc3d8JoCzQtMOuEjA',
          registerdate: '2023-07-26T22:41:42.274405'
        }
      ]
    },
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
  },
  getters: {
    courseName: (state) => state.course.name,
    courseDescription: (state) => state.course.description
  }
})
