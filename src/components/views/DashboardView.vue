<script setup>
import { ref } from 'vue'
import CoursesInfoCard from '../CoursesInfoCard.vue'
const model = ref(null)
</script>

<template>
  <v-slide-group v-model="model"  center-active show-arrows>
    <v-slide-group-item v-for="n in 15" :key="n">
      <courses-info-card></courses-info-card>
    </v-slide-group-item>
  </v-slide-group>
</template>

<style lang="scss" scoped></style>
