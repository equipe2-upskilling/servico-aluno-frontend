<script setup>
import { onMounted, ref, computed } from 'vue'
import { useAuthStore, useCoursesStore } from '@/stores'
import { useRoute } from 'vue-router'
import CoursesInfoCard from '../components/CoursesInfoCard.vue'

let total = 5
let searchText = 'teste'

const coursesStore = useCoursesStore()
const authStore = useAuthStore()

const courses = computed(() => coursesStore.courses)

console.log(courses.value)

function buscarCursos() {
  coursesStore.getCourses()
}

onMounted(() => {
  buscarCursos()
})
</script>

<template>
  <v-container id="ctnr-search">
    <div>
      A pesquisa do termo <i>{{ searchText }}</i> retornou um total de
      <strong>{{ total }} registro(s)</strong>
    </div>
    <v-divider></v-divider>
    <v-row class="row-courses">
      <v-col cols="15" sm="5" md="4" lg="3" xl="2" xxl="1" v-for="course in courses">
        <courses-info-card
          :title="course.name"
          :teacher="course.teacher"
          :descr="course.descr"
          :acquired="course.acquired"
          class="course-card"
        ></courses-info-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.course-card {
  margin: 10px !important;
}
#ctnr-search > div {
  padding: 12px;
}
#ctnr-search > div > i {
  font-size: 18px;
}
</style>
