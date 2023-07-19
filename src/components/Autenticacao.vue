<script setup>
import { ref, computed, reactive } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')
// let profile = reactive({})
let profile = reactive({
  id: 0,
  email: '',
  password: '',
  name: '',
  role: '',
  avatar: ''
})

const exibirProfile = ref(false)

let access_token = ref(localStorage.getItem('access_token'))
let refresh_token = ref(localStorage.getItem('refresh_token'))

const logado = computed(() => {
  return !!access_token.value && !!refresh_token.value
})


function login() {
  axios
    .post('https://api.escuelajs.co/api/v1/auth/login', {
      email: username.value,
      password: password.value
    })
    .then((r) => {
      console.log(r.data)
      localStorage.setItem('access_token', r.data.access_token)
      localStorage.setItem('refresh_token', r.data.refresh_token)
      
    })
    .catch((e) => console.error(e))
}

function logout() {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

function buscarUsuario() {
  axios
    .get('https://api.escuelajs.co/api/v1/auth/profile', {
      headers: {
        Authorization: 'Bearer ' + access_token.value
      }
    })
    .then((r) => {
      profile = r.data
      exibirProfile.value = true
      console.log(profile)
    })
    .catch((e) => console.error(e))
}
</script>
<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>Login form</v-toolbar-title>
      <v-btn v-show="logado" @click="logout">Sair</v-btn>
    </v-toolbar>
    <v-card-text v-show="!logado">
      <form ref="form" @submit.prevent="login()">
        <v-text-field
          v-model="username"
          name="username"
          label="Username"
          type="text"
          placeholder="username"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          name="password"
          label="Password"
          type="password"
          placeholder="password"
          required
        ></v-text-field>
        <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
      </form>
    </v-card-text>
  </v-card>

  <v-card v-show="logado">
    <h3>Buscar usuario usando autenticação</h3>
    <v-btn v-show="logado" @click="buscarUsuario">Buscar</v-btn>
    <v-card-text v-show="exibirProfile">
      {{ profile.name }} {{ profile.role }}
      <v-avatar :image="profile.avatar" size="100"></v-avatar>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped></style>
