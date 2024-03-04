import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import MyWorks from '../views/MyWorks.vue';
import About from '../views/About.vue'; 
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory( ),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  
    {
      path: '/presentation',
      name: 'About',
      component: About,
    },
    {
      path: '/réalisations',
      name: 'MyWorks',
      component: MyWorks,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    } 
  ],
 
});

export default router;
