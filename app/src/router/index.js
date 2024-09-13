import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/home.vue";
import Wizard from "@/views/wizard.vue";

const routes = [
  { path: "", name: "home", component: Home },
  { path: "/wizard", name: "wizard", component: Wizard },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
