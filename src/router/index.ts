import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Sylvain Buisson - Home"
    }, 
    component: () =>
      import(/* webpackChunkName: "home") */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "Sylvain Buisson - About"
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    
  },
  {
    path: "/portfolio",
    name: "portfolio",
    meta: {
      title: "Sylvain Buisson - Portfolio"
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PortfolioView.vue"),
    
  },
  {
    path: "/resume",
    name: "resume",
    meta: {
      title: "Sylvain Buisson - Resume"
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ResumeView.vue"),
    
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title || 'Your Website';
    next()
  }
})

export default router;
