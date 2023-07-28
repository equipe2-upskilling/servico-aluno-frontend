<script setup>
import { ref } from 'vue'

const show = ref(false)

const props = defineProps(['title', 'teacher', 'descr', 'acquired', 'index'])

let btn_text = ref('')
let btn_color = ref('')
let linkToAccess = ref('')

if (props.acquired) {
  btn_text.value = 'Continuar'
  btn_color.value = 'green-darken-2'
  linkToAccess.value = `/curso-acesso/${props.index}`
} else {
  btn_text.value = 'Inscrever'
  btn_color.value = 'indigo-darken-2'
  linkToAccess.value = `/inscricao/${props.index}`
}
</script>

<template>
  <v-card class="mx-auto course" max-width="300" min-width="250">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

    <v-card-title> {{ props.title }} </v-card-title>

    <v-card-subtitle> {{ props.teacher }} </v-card-subtitle>

    <v-card-actions>
      <v-btn
        :to="linkToAccess"
        block
        class="text-none mb-4"
        :color="btn_color"
        size="x-large"
        variant="flat"
        outlined
      >
        {{ btn_text }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>
.course .v-btn {
  margin-bottom: 0px !important;
  width: 100% !important;
}
.course .v-card-title {
  padding-bottom: 0px !important;
}
.v-card-actions {
  display: block !important;
}
</style>
