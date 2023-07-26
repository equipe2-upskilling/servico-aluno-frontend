<script setup>
import CoursesInfoCard from '../components/CoursesInfoCard.vue'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()
const courses = [
  { title: 'Matrizes', teacher: 'Joe Montana', descr: 'teste matrizes' },
  { title: '.NET Core', teacher: 'Danilo', descr: 'teste dotnet' },
  { title: 'Vue 3', teacher: 'Mario', descr: 'teste vue 3...' }
]
const recommendeds = [
  { title: 'Docker', teacher: 'Maria', descr: 'teste docker' },
  { title: 'Unreal Engine 5.2', teacher: 'Joanna', descr: 'teste ue5' },
  { title: 'Testes', teacher: 'Vespucio', descr: 'teste testes...' },
  { title: 'Excel', teacher: 'Vespucio', descr: 'teste excel' },
  { title: 'Excel', teacher: 'Vespucio', descr: 'teste excel' },
  { title: 'Excel', teacher: 'Vespucio', descr: 'teste excel' },
  { title: 'Excel', teacher: 'Vespucio', descr: 'teste excel' },
  { title: 'Excel', teacher: 'Vespucio', descr: 'teste excel' },
  { title: 'Excel', teacher: 'Vespucio', descr: 'teste excel' },
  { title: 'Excel', teacher: 'Vespucio', descr: 'teste excel' },
  { title: 'Excel', teacher: 'Vespucio', descr: 'teste excel' },
  { title: 'Excel', teacher: 'Vespucio', descr: 'teste excel' }
]
</script>

<template>
  <v-container>
    <div class="recommended">
      <div class="title">
        <div>
          <v-icon aria-hidden="false" size="small">mdi-heart</v-icon>
          <span>Recomendado para você</span>
        </div>
        <div>Veja o que separamos para você de acordo com os seus interesses</div>
      </div>
      <v-sheet class="mx-auto">
        <v-slide-group class="" show-arrows v-slot="{ active, toggle }">
          <v-slide-group-item v-for="recommended in recommendeds" :key="recommended">
            <courses-info-card
              :title="recommended.title"
              :teacher="recommended.teacher"
              :descr="recommended.descr"
              :acquired="false"
              style="margin: 6px !important"
            ></courses-info-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>
    <div class="recently" v-show="authStore.user">
      <div class="title">
        <div>
          <v-icon aria-hidden="false" size="small">mdi-school</v-icon>
          <span>Cursados recentemente</span>
        </div>
        <div>Continue estudando de onde você parou</div>
      </div>
      <v-row class="row-courses">
        <v-col
          cols="15"
          sm="5"
          md="4"
          lg="3"
          xl="2"
          xxl="1"
          v-for="course in courses"
          :key="course"
        >
          <courses-info-card
            :title="course.title"
            :teacher="course.teacher"
            :descr="course.descr"
            :acquired="true"
          ></courses-info-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style>
.v-slide-group__content {
  justify-content: center !important;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}
.row-courses > div {
  padding-top: 12px !important;
  padding-left: 6px !important;
  padding-bottom: 0px !important;
}
.teste {
  border: 1px solid #d6d6d6 !important;
  background-color: #dfdfdf !important;
  /*width: 100% !important;*/
  margin: 10px 0px !important;
  padding: 20px !important;
  padding-bottom: 26px !important;
}
.recommended .v-sheet {
  background-color: transparent !important;
  /*border: 1px solid #DDD;*/
  margin-bottom: 10px;
}
.recommended .title {
  color: #303f9f;
}
.recommended .title > div:first-child {
  margin-top: 16px;
  padding: 6px 6px 0px 6px !important;
}
.recommended .title > div:first-child .v-icon {
  padding-right: 10px;
}
.recommended .title > div:first-child span {
  vertical-align: middle;
}
.recommended .title > div:last-child {
  padding: 0px 6px !important;
  font-size: 14px;
  font-weight: normal;
}
</style>
