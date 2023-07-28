<script setup>
import { computed, onMounted } from 'vue'
import CoursesInfoCard from '@/components/CoursesInfoCard.vue'
import { useCoursesStore } from '../stores'

const courseStore = useCoursesStore()

const recommendeds = computed(() => {
  console.table(courseStore.courses)
  return courseStore.courses
})

onMounted(() => {
  courseStore.getCourses()
  console.table(courseStore.courses)
})
</script>
<template>
  <div class="recommended">
    <div class="title">
      <div>
        <v-icon aria-hidden="false" size="small">mdi-heart</v-icon>
        <span>Recomendado para você</span>
      </div>
      <div class="descr">Veja o que separamos para você de acordo com os seus interesses</div>
    </div>
    <v-sheet class="mx-auto">
      <v-slide-group class="" show-arrows v-slot="{ active, toggle }">
        <v-slide-group-item v-for="recommended in recommendeds" :key="recommended">
          <courses-info-card
            :title="recommended.name"
            :teacher="recommended.teacher"
            :descr="recommended.description"
            :acquired="false"
            :index="recommended.courseId"
            style="margin: 6px !important"
          ></courses-info-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
<style scoped>
.v-container {
  margin: 0px 12px !important;
}
.v-slide-group__content {
  justify-content: center !important;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}
.row-courses {
  margin: 0px 2px !important;
}
.row-courses > div {
  padding-top: 12px !important;
  padding-left: 6px !important;
  padding-right: 6px !important;
  padding-bottom: 0px !important;
}
.teste {
  border: 1px solid #d6d6d6 !important;
  background-color: #dfdfdf !important;
  /*width: 100% !important;*/
  margin: 10px 0px !important;
  padding: 20px !important;
  background-color: #4158d0;
  padding-bottom: 26px !important;
}
.recommended .v-sheet,
.recently .v-sheet {
  background-color: transparent !important;
  /*border: 1px solid #DDD;*/
  margin-bottom: 10px;
}
.recommended .title {
  color: #222;
}
.recently .title {
  color: #222;
}
.recommended .title > div:first-child,
.recently .title > div:first-child {
  margin-top: 4px;
  padding: 6px 6px 0px 6px !important;
}
.recommended .title > div:first-child .v-icon,
.recently .title > div:first-child .v-icon {
  padding-right: 10px;
}
.recommended .title > div:first-child span,
.recently .title > div:first-child span {
  vertical-align: middle;
}
.recommended .title > div:last-child,
.recently .title > div:last-child {
  padding: 0px 6px !important;
  font-size: 14px;
  font-weight: normal;
}
</style>
