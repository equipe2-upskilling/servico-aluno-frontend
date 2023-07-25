<script setup>
  import CoursesInfoCard from '../components/CoursesInfoCard.vue'
  const courses = [
      { title: "Matrizes", teacher: "Joe Montana",  descr: "teste matrizes", acquired: true },
      { title: ".NET Core", teacher: "Danilo",  descr: "teste dotnet", acquired: false },
      { title: "Vue 3", teacher: "Mario",  descr: "teste vue 3...", acquired: false },
  ];
  let total = 5;
  let searchText = "teste";
</script>

<template>
  <v-container id="ctnr-search">
    <div>A pesquisa do termo <i>{{ searchText }}</i> retornou um total de <strong>{{ total }} registro(s)</strong></div>
    <v-divider></v-divider>
    <v-row class="row-courses">
      <v-col cols="15" sm="5" md="4" lg="3" xl="2" xxl="1" v-for="course in courses">
        <courses-info-card :title="course.title" :teacher="course.teacher" :descr="course.descr" :acquired="course.acquired" class="course-card"></courses-info-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  .course-card{
    margin: 10px !important;
  }
  #ctnr-search > div {
    padding: 12px;
  }
  #ctnr-search > div > i {
    font-size: 18px;
  }
</style>