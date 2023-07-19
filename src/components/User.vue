<script setup>
import { ref, reactive } from 'vue'

const nome = ref('')

const pessoa = reactive({
  nome: '',
  idade: 0
})
</script>

<template>
  <form>
    <label for="nome">Nome: </label>
    <input v-model="nome" id="nome" name="nome" type="text" />
    <input v-model="pessoa.nome" id="nome2" name="nome2" type="text" />
    <input v-model="pessoa.idade" id="idade" name="idade" type="number" />
  </form>

  {{ nome }}

  {{ pessoa.nome }} - {{ pessoa.idade }}


  <div class="text-center">
    <v-chip class="ma-2"> Default </v-chip>

    <v-chip class="ma-2" color="primary"> Primary </v-chip>

    <v-chip class="ma-2" color="secondary"> Secondary </v-chip>

    <v-chip class="ma-2" color="red" text-color="white"> Red Chip </v-chip>

    <v-chip class="ma-2" color="green" text-color="white"> Green Chip </v-chip>
  </div>
</template>

<style lang="scss" scoped></style>
