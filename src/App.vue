<script setup>
import { ref } from 'vue'
import router from '@/router'

import { useAuthStore } from './stores'
import { onMounted } from 'vue'
import { reactive } from 'vue'
import SearchInput from './components/SearchInput.vue';

const authStore = useAuthStore()
const drawer = ref(null)

const items = reactive([
  { title: 'Pagina inicial', icon: 'mdi-home', to: '/', visible: true },
  { title: 'Meus Cursos', icon: 'mdi-folder', to: '/meus-cursos', visible: !!authStore.user },
  //{ title: 'Agenda', icon: 'mdi-calendar-check', to: '/agenda', visible: !!authStore.user },
  {
    title: 'Certificados',
    icon: 'mdi-certificate',
    to: '/certificados',
    visible: !!authStore.user
  },
  { title: 'Conta', icon: 'mdi-account-edit', to: '/conta', visible: !!authStore.user },
  { title: 'Entrar', icon: 'mdi-login', to: '/login', visible: !authStore.user }
])

</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      v-bind:style="{
        backgroundImage:
          'url(https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg)'
      }"
    >
      <v-list v-show="authStore.user">
        <v-list-item
          v-show="authStore.user"
          prepend-avatar="https://avatarfiles.alphacoders.com/261/thumb-261943.jpg"
          title="Homer Simpson"
          subtitle="duh@gmail.com"
        ></v-list-item>
        <div style="text-align: center; padding: 6px">
          <v-btn
            prepend-icon="mdi-logout"
            @click="authStore.logout()">
            Sair
          </v-btn>
        </div>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :title="item.title"
          :prepend-icon="item.icon"
          :value="item.title"
          :to="item.to"
          v-show="item.visible"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <SearchInput />
    </v-app-bar>

    <v-main>
      <div class="main-content">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<style>
.main-content {
  padding: 0px 10px !important;
}
.search {
  max-width: 400px !important;
  margin: 0px 10px 0px 2px !important;
}
.v-list-item__prepend > .v-icon {
  margin-inline-end: 10px !important;
}
.v-navigation-drawer__content {
  color: #fff !important;
  background-color: #3bbbc5 !important;
  background-image: linear-gradient(0deg, #3bbbc5 0%, #7d5ba6 100%) !important;
}
.v-navigation-drawer {
  border: 0px !important;
}
.v-toolbar {
  background-color: #d9d9d9 !important;
}
.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: none !important;
}
.v-list-group {
  --prepend-width: 15px !important;
}
.v-main {
  background-color: #e9e9e9 !important;
}

.curso {
  margin: 12px 0px !important;
}
</style>