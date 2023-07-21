<script setup>
import { ref } from 'vue'
import router from "@/router";
import SearchInput from "./SearchInput.vue";

/*const search_input = ref(null);
const observer = new IntersectionObserver((entries, observer) => {
  console.log(entries)
});*/

const drawer = ref(null)
const loading = ref(false)
const items = ref([
  { title: 'Pagina inicial', icon: 'mdi-home', to: "/" },
  { title: 'Meus Cursos', icon: 'mdi-folder', to: "/meus-cursos" },
  { title: 'Agenda', icon: 'mdi-calendar-check', to: "/agenda" },
  { title: 'Certificados', icon: 'mdi-certificate', to: "/certificados" },
  { title: 'Conta', icon: 'mdi-account-edit', to: "/conta" }
]);

function onClick() {
  console.log('pesquisar');
  router.push('busca');
}

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
      <v-list>
        <v-list-item
          prepend-avatar="https://avatarfiles.alphacoders.com/261/thumb-261943.jpg"
          title="Homer Simpson"
          subtitle="duh@gmail.com"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" 
          :title="item.title"
          :prepend-icon="item.icon"
          :value="item.title"
          :to="item.to"
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
.main-content{
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
