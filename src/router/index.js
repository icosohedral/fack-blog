import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/components/LandingPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Set the document title dynamically based on the route's meta title
router.beforeEach((to, from, next) => {
  document.title = 'My Blog Space';
  next();
});

export default router;

