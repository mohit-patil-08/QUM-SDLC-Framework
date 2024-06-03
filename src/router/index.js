import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import TasksPage from "@/views/TasksPage.vue";
import ScenariosPage from "@/views/ScenariosPage.vue";
import PersonaPage from "@/views/PersonaPage.vue";
import OutcomePage from "@/views/OutcomePage.vue";
import StepsPage from "@/views/StepsPage.vue";
import FlowsPage from "@/views/FlowsPage.vue";

const router =  createRouter({
  history: createWebHashHistory("/"),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomePage,
    // },
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
    {
      path: "/persona",
      name: "persona",
      component: PersonaPage,
    },
    {
      path: "/outcome",
      name: "outcome",
      component: OutcomePage,
    },
    {
      path: "/steps",
      name: "steps",
      component: StepsPage,
    },
    {
      path: "/flows",
      name: "flows",
      component: FlowsPage,
    },
  ],
});

export default router;