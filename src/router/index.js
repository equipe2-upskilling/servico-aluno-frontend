import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores'

import {
  LoginView,
  RegisterView,
  HomeView,
  MyCoursesView,
  ScheduleView,
  CertificatesView,
  AccountView,
  SearchView,
  CourseAccessView,
  EnrollmentView,
  PaymentView,
  AboutView
} from '@/views'

const routes = [
  { path: '/', component: HomeView },
  { path: '/meus-cursos', component: MyCoursesView },
  { path: '/agenda', component: ScheduleView },
  { path: '/certificados', component: CertificatesView },
  { path: '/conta', component: AccountView },
  { path: '/busca', component: SearchView },
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: HomeView },
  { path: '/register', component: RegisterView },
  { path: '/inscricao/:id', component: EnrollmentView },
  { path: '/pagamento/:id', component: PaymentView },
  { path: '/curso-acesso/:id', component: CourseAccessView },
  { path: '/sobre', component: AboutView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

router.beforeEach(async (to) => {
  const publicPages = ['/login', '/register', '/']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath
    return '/login'
  }
})

export default router
