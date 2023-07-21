<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

import { useAuthStore } from './stores'

const authStore = useAuthStore()
const drawer = ref(null)
const loading = ref(false)

function onClick() {
  console.log('pesquisar')
}
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list v-show="authStore.user">
        <v-list-item
          prepend-avatar="https://avatarfiles.alphacoders.com/261/thumb-261943.jpg"
          title="Homer Simpson"
          subtitle="duh@gmail.com"
        ></v-list-item>
        <v-list-item>
          <a @click="authStore.logout()">Logout</a>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <RouterLink class="custom-router-link" to="/Dashboard">
          <v-list-item
            prepend-icon="mdi-home"
            title="Pagina Inicial"
            value="paginicial"
          ></v-list-item
        ></RouterLink>
        <div v-show="authStore.user">
          <v-list-item
            prepend-icon="mdi-folder"
            title="Meus Cursos"
            value="meuscursos"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-calendar-check"
            title="Agenda"
            value="agenda"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-certificate"
            title="Certificados"
            value="certificados"
          ></v-list-item>
          <v-list-item prepend-icon="mdi-account-edit" title="Perfil" value="perfil"></v-list-item>
        </div>
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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

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
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<style scoped>
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
.custom-router-link {
  text-decoration: none; /* Remover o sublinhado */
  color: inherit; /* Herdar a cor do texto do elemento pai (sem cor azul padrão) */
}
</style>
