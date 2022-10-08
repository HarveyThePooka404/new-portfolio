import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

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
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
          selector: to.hash,
          offset: { x: 0, y: 80 }, // avoid blocking the view when having fixed components
          behavior: 'smooth'
      };
  } else if (savedPosition) {
      return savedPosition;
  } else {
      return { x: 0, y: 0 };
  }
  }
});



router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title || 'Your Website';
    next()
  }
})

export default router;
