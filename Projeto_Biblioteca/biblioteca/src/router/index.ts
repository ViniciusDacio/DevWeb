import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaAdmin from '../views/TelaAdmin.vue'
import TelaUser from '../views/TelaUsuario.vue'
import CadBook from '../views/CadastroLivro.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',

    component: () => import('../views/TelaAdmin.vue')
  },
  {
    path: '/new_user',
    name: 'new_user',

    component: TelaUser
  },
  {
    path: '/cad_book',
    name: 'book',

    component: CadBook
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
