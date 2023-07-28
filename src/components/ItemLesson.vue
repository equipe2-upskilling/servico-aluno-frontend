<script setup>
import { reactive, watch } from 'vue'
import { useUsersCoursesStore } from '@/stores'
const usersCoursesStore = useUsersCoursesStore()
const props = defineProps(['lesson', 'idCourse', 'idStudent'])

const lesson = reactive(props.lesson)

function checkAsCompleted(idLesson) {
  //console.log(idLesson)
  usersCoursesStore.markLessonCompleted(idLesson, parseInt(props.idCourse), props.idStudent)
  var panel = document.querySelector('#panel-' + idLesson + ' button')
  panel.click()
}
watch(lesson, () => {
  console.log(lesson.lessonTitle)
})
</script>
<template>
  <v-expansion-panel-title>
    {{ lesson.lessonTitle }}
    <template v-slot:actions="{ expanded }">
      <v-icon
        :color="lesson.isCompleted ? '#2E7D32' : '#EF5350'"
        :icon="lesson.isCompleted ? 'mdi-check-circle' : 'mdi-alert-circle'"
      ></v-icon>
    </template>
  </v-expansion-panel-title>
  <v-expansion-panel-text>
    <div class="content-descr">
      {{ lesson.lessonDescription }}
    </div>
    <v-btn
      @click="checkAsCompleted(lesson.id)"
      rounded="lg"
      color="success"
      size="small"
      class="ml-auto"
    >
      Marcar como finalizada
    </v-btn>
  </v-expansion-panel-text>
</template>

<style></style>
