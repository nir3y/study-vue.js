import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue';
import TheHome from './components/TheHome.vue';

const routes = [
  {
    path: "/BlogList",
    component: BlogList,
  },
  {
    path:"/",
    component:TheHome,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 