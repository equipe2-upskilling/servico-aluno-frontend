<script setup>
import { useAuthStore } from '@/stores'
import { RecomendedCourseList, MyCourseList } from '@/components'

const authStore = useAuthStore()
const courses = [
  { title: 'Matrizes', teacher: 'Joe Montana', descr: 'teste matrizes' },
  { title: '.NET Core', teacher: 'Danilo', descr: 'teste dotnet' },
  { title: 'Vue 3', teacher: 'Mario', descr: 'teste vue 3...' }
]
</script>

<template>
  <v-container>
    <RecomendedCourseList></RecomendedCourseList>
    <MyCourseList></MyCourseList>
  </v-container>
</template>

<style>
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
