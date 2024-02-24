import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory( ),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
  
      path: '/presentation',
      name: 'Présentation',
       
      component: () => import('../views/About.vue')
    
    },
    {
      path: '/myWorks',
      name: 'Réalisations',
     
      component: () => import('../views/myWorks.vue')
    },
    {
      path: '/contact',
      name: 'contact',
     
      component: () => import('../views/contact.vue')
    },
   
  ]
})

export default router;
