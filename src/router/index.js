import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/components/Main.vue';
import AboutUs from '@/views/aboutus.vue';
import Dishes from '@/views/Dishes.vue';
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import Blog from '@/views/Blog.vue';
import Contactus from '@/views/Contactus.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUs,
  },
  {
    path: '/dishes',
    name: 'dishes',
    component: Dishes,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/blog',
    name: 'blog',
    component:Blog,
  },
  {
    path: '/contact',
    name: 'contact',
    component:Contactus,
  },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
