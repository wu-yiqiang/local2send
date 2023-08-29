import { createRouter, createWebHashHistory } from 'vue-router'
import routerMap from './routerMap'
const routes = [
  {
    path: "/",
    redirect: "/receive",
    children: routerMap,
  },
];

const Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default Router
