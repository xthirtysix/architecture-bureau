import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  }
];

const router = new VueRouter({
  routes
});

export default router;
