import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import ViewContact from '../views/ViewContact.vue'
import CreateContact from '../views/CreateContact.vue'
import EditContact from '../views/UpdateContuct.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title:'Home'
    },
  },
  {
    path: '/Contact-list',
    name: 'contact-list',
    component: ViewContact,
    meta:{
      title:'Contact-list'
    },
  },
  {
    path: '/newContact',
    name: 'creat-contact',
    component: CreateContact,
    meta:{
      title:'creat-contact'
    },
  },
  {
    path: '/contact/:id/edit',
    name: 'edit-contact',
    component: EditContact,
    meta:{
      title:'edit-contact'
    },
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
