import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/services",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
