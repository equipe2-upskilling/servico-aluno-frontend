import { createRouter, createWebHistory } from 'vue-router';

// Import your Vue components that represent different pages
import Home from '../views/Home.vue';
import MyCourses from '../views/MyCourses.vue';
import Schedule from '../views/Schedule.vue';
import Certificates from '../views/Certificates.vue';
import Account from '../views/Account.vue';
import Search from '../views/Search.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/meus-cursos', component: MyCourses },
  { path: '/agenda', component: Schedule },
  { path: '/certificados', component: Certificates },
  { path: '/conta', component: Account },
  { path: '/busca', component: Search },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;