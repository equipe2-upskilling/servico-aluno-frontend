<script setup>
import axios from 'axios'
import { ref, computed, onMounted, reactive } from 'vue'

// const dog = computed(() =>

const infos = ref([])

onMounted(async () => {
  await axios
    .get('https://dummyjson.com/products')
    .then((resultado) => (infos.value = resultado.data))
    .catch((erro) => {
      console.log(erro)
    })
})
</script>

<template>
  <h3>Pokemons</h3>

  <v-list lines="one">
    <v-list-item
      v-for="(poke, index) in infos.products"
      :key="index"
      :title="poke.title"
    ></v-list-item>
  </v-list>
</template>

<style lang="scss" scoped></style>
