import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import Dashboard from "../views/Dashboard.vue";
import Projects from "../views/Projects.vue";
import Scheduler from "../views/Scheduler.vue";
import Charts from "../views/Charts.vue";
import Pickers from "../views/Pickers.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/scheduler",
    name: "Scheduler",
    component: Scheduler,
  },
  {
    path: "/charts",
    name: "Charts",
    component: Charts,
  },
  {
    path: "/pickers",
    name: "Pickers",
    component: Pickers,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
