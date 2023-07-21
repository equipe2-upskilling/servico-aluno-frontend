<script setup>
import { ref } from 'vue'

const show = ref(false)

const props = defineProps(['title', 'teacher', 'descr', 'acquired']);

let btn_text = "";
let btn_color = "";
if(props.acquired) {
  btn_text = "Continuar";
  btn_color = "green-darken-2";
}else {
  btn_text = "Inscrever";
  btn_color = "indigo-darken-2";
}

</script>

<template>
  <v-card class="mx-auto course" max-width="300" min-width="250">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

    <v-card-title> {{props.title}} </v-card-title>

    <v-card-subtitle> {{props.teacher}} </v-card-subtitle>

    <v-card-actions>
      <v-btn 
        block
        class="text-none mb-4"
        :color="btn_color"
        size="x-large"
        variant="flat"
        outlined> {{ btn_text }} </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>
.course .v-btn {
  margin-bottom: 0px !important;
  padding: 0px !important;
}
.course .v-card-title {
  padding-bottom: 0px !important;
}
</style>
