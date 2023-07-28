<script setup>
import { computed, onMounted, ref } from 'vue'
import { useCoursesStore } from '../stores'
import { useRoute } from 'vue-router'

const courseStore = useCoursesStore()

const course = computed(() => {
  console.log(courseStore.course)
  return courseStore.course
})
onMounted(() => {
  courseStore.getCourseById(useRoute().params.id)
  // courseStore.getCourse(useRoute().params.id)
})
</script>

<template>
  <v-row id="course-detail">
    <v-col cols="15">
      <div class="title">{{ course.name }}</div>
      <div class="descr">{{ course.description }}</div>
      <div class="descr">Duração: {{ course.duration }}h</div>
      <v-img></v-img>
      <div>&nbsp;</div>
      <div class="content">Conteúdo:</div>
      <v-container id="ctnr-content">
        <v-row class="row-content" v-for="content in course.lessons" :key="content.lessonId">
          <v-col cols="1"><v-icon icon="mdi-play-circle" /></v-col>
          <v-col cols="18">
            <v-row> {{ content.name }}</v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="3">
      <v-container>
        <v-row>
          <v-col>
            <v-img src="/assets/imgs/empty-player.png"></v-img>
          </v-col>
        </v-row>
        <div class="course-price">R$ {{ course.price }}</div>
        <RouterLink class="text-blue text-decoration-none" to="/pagamento">
          <v-btn
            block
            class="text-none mb-4"
            color="indigo-darken-2"
            size="x-large"
            variant="flat"
            outlined
          >
            Inscrever-se
          </v-btn>
        </RouterLink>
      </v-container>
    </v-col>
  </v-row>
</template>

<style>
#course-detail {
  margin: 12px 4px !important;
}
#course-detail > .v-col {
  background-color: #fff !important;
  border: 1px solid #ccc;
  margin: 0px 4px !important;
  padding: 6px;
  border-radius: 6px;
}
#course-detail .title {
  font-size: 24px;
  font-weight: bold;
}
#course-detail .descr {
  font-size: 16px;
}
#course-detail div {
  margin: 0px 8px !important;
}
.row-content {
  border-collapse: collapse;
  border: 1px solid #ddd;
  background-color: #eee;
  margin: 0px !important;
  padding: 2px !important;
}
.row-content .v-col {
  border: 0px !important;
}
.v-container {
  padding-left: 0px !important;
}
.course-price {
  padding: 10px 0px !important;
  font-size: 24px;
  font-weight: bold;
  color: #43a047;
}
#ctnr-content .v-col:first-child {
  max-width: 10px;
}
</style>
