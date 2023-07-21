import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '../stores';

import { HomeView, LoginView, DashboardView,RegisterView} from '../components/views';



export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: HomeView },
        { path: '/login', component: LoginView },
        { path: '/dashboard', component: DashboardView },
        { path: '/register', component: RegisterView}
    ]
});

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});
