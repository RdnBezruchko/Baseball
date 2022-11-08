import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('../views/VLoginPage.vue'),
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: () => import('../views/VForgotPage.vue'),
  },
  {
    path: '/personal',
    name: 'PersonalInfo',
    component: () => import('../views/VPersonalInfo.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


