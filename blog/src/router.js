import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue';
import TheHome from './components/TheHome.vue';
import TheDetail from './components/TheDetail.vue';

const routes = [
  {
    path: "/bloglist",
    component: BlogList,
  },
  {
    path:"/",
    component:TheHome,
  },
  {
    path:"/thedetail",
    component: TheDetail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 