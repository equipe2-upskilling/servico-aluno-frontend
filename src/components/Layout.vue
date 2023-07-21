<script setup>

import CoursesInfoCard from './CoursesInfoCard.vue'


</script>

<template>
 
    <v-main>
      <courses-info-card></courses-info-card>

      <CoursesInfoCard />
    </v-main>

</template>

<style>
.search {
  max-width: 400px;
  margin: 0px 10px 0px 2px;
}
.v-list-item__prepend > .v-icon {
  margin-inline-end: 10px;
}
.v-navigation-drawer__content {
  color: #fff !important;
  background-color: #3bbbc5;
  background-image: linear-gradient(0deg, #3bbbc5 0%, #7d5ba6 100%);
}
.v-navigation-drawer {
  border: 0px;
}
.v-toolbar {
  background-color: #d9d9d9 !important;
}
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: none;
}
.v-list-group {
  --prepend-width: 15px;
}
.v-main {
  background-color: #e9e9e9;
}

.curso {
  margin: 12px 0px;
}
</style>
