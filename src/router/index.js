import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import TasksPage from "@/views/TasksPage.vue";
import ScenariosPage from "@/views/ScenariosPage.vue";

const router =  createRouter({
  history: createWebHashHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/tasks",
      name: "tasks",
      component: TasksPage,
    },
    {
      path: "/scenarios",
      name: "scenarios",
      component: ScenariosPage,
    },
  ],
});

export default router;