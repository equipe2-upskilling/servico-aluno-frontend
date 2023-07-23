<script setup>
import { onMounted, ref, computed } from 'vue'
import { useUsersCoursesStore, useAuthStore } from '@/stores'
import { useRoute } from 'vue-router'

const usersCoursesStore = useUsersCoursesStore()
const authStore = useAuthStore()

const lessons = computed(() => usersCoursesStore.listLessons)
const calcPercentage = computed(() => usersCoursesStore.calcPercentage)

const course = computed(() => usersCoursesStore.course)

const idCourse = ref(0)
const certificateAvailable = computed(() => {
  return calcPercentage.value === 100
})

function buscarCursoMatriculado(idUser, idCourse) {
  usersCoursesStore.getUserCourse(idUser, idCourse)
}

function checkAsCompleted(idLesson) {
  console.log(idLesson)
  usersCoursesStore.markLessonCompleted(idLesson)
}
onMounted(() => {
  idCourse.value = useRoute().params.id
  buscarCursoMatriculado(authStore.user.id, idCourse)
})
</script>

<template>
  <v-row no-gutters class="d-flex">
    <v-col class="v-col-8">
      <div class="text-h4">{{ course.name }}</div>

      <div class="text-justify">{{ course.description }}</div>
      <v-img :src="course.image" cover></v-img>
    </v-col>
    <v-spacer size="50px"></v-spacer>
    <v-col class="v-col-4 d-flex flex-column justify-space-around">
      <v-progress-circular
        class="align-self-center"
        :size="100"
        :width="15"
        :model-value="calcPercentage"
        color="success"
      >
        {{ calcPercentage }}
      </v-progress-circular>

      <v-btn
        class="align-self-center"
        rounded="lg"
        color="success"
        size="large"
        flat
        :disabled="!certificateAvailable"
      >
        Obter certificado
      </v-btn>

    </v-col>
  </v-row>
  <v-row no-gutters>
    <div class="w-75">
      <div class="text-h5 my-8">Aulas</div>
      <v-expansion-panels v-for="(lesson, index) in lessons" :key="index">
        <v-expansion-panel class="my-2">
          <v-expansion-panel-title>
            {{ lesson.lessonTitle }}
            <template v-slot:actions="{ expanded }">
              <v-icon
                :color="lesson.isCompleted ? 'teal' : 'error'"
                :icon="lesson.isCompleted ? 'mdi-check-circle' : 'mdi-alert-circle'"
              ></v-icon>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            {{ lesson.lessonDescription }}
            <v-btn
              @click="checkAsCompleted(lesson.id)"
              rounded="lg"
              color="success"
              size="small"
              class="ml-auto"
            >
              Marcar com finalizada
            </v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-row>
</template>

<style scoped></style>
