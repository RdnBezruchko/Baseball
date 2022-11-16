import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPage.vue'),
  },
  {
    path: '/personal',
    name: 'PersonalInfo',
    component: () => import('../views/PersonalInfoPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


