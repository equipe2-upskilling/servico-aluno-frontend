<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import { useAuthStore } from './stores';

const authStore = useAuthStore()
const drawer = ref(null)
const loading = ref(false)

function onClick() {
  console.log('pesquisar')
}

</script>

<template>
  <v-app id="inspire">

    <nav v-show="authStore.user">
      <div>
        <RouterLink to="/">Home</RouterLink>
        <a @click="authStore.logout()">Logout</a>
      </div>
    </nav>
    <v-navigation-drawer 
        v-model="drawer"
        v-bind:style="{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg)'
        }"
      >
      <v-list>
        <v-list-item
          prepend-avatar="https://avatarfiles.alphacoders.com/261/thumb-261943.jpg"
          title="Homer Simpson"
          subtitle="duh@gmail.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list 
      density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home"
              value="paginicial"
        ><RouterLink to="/">Pagina Inicial</RouterLink></v-list-item>
        <v-list-item prepend-icon="mdi-folder" title="Meus Cursos" value="meuscursos"></v-list-item>
        <v-list-item prepend-icon="mdi-calendar-check" title="Agenda" value="agenda"></v-list-item>
        <v-list-item
          prepend-icon="mdi-certificate"
          title="Certificados"
          value="certificados"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-account-edit" title="Perfil" value="perfil"></v-list-item>
        <v-divider></v-divider>
        <v-list-group prepend-icon="mdi-school" value="Categorias">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Por Categoria"></v-list-item>
          </template>
          <v-list-item
            prepend-icon="mdi-calendar-check"
            title="Tecnologia"
            value="tecnologia"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-text-field
        :loading="loading"
        density="compact"
        variant="solo"
        label="Pesquisar Cursos"
        append-inner-icon="mdi-magnify"
        single-line
        rounded
        hide-details
        @click:append-inner="onClick"
        class="search"
      ></v-text-field>
    </v-app-bar>
    <RouterView />
    </v-app>
</template>

<style scoped>
</style>
