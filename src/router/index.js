import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",

    component: () =>
    import( "../views/iconfontTest.vue"),
  },
  {
    path: "/scaleTest",

    component: () =>
    import( "../views/scaletest.vue"),
  },
  {
    path: "/gradient",

    component: () =>
    import( "../views/gradientTest.vue"),
  },
  {
    path: "/animation3D",

    component: () =>
    import( "../views/animation3D.vue"),
  },
  {
    path: "/aniamtionKeyframe",
    component: () =>
    import( "../views/aniamtionKeyframe.vue"),
  },
  {
    path: "/revolvingLantern",
    component: () =>
    import( "../views/revolvingLantern.vue"),
  },
  {
    path: "/alignItem",
    component: () =>
    import( "../views/alignItem.vue"),
  },
  {
    path: "/xiaotuxian",
    component: () =>
    import( "../views/xiaotuxian.vue"),
  },
  {
    path: "/remExercise",
    component: () =>
    import( "../views/remExercise.vue"),
  },

  {
    path: "/playground",
    component: () =>
    import( "../views/playground.vue"),
  },

  {
    path: "/vw+vh",
    component: () =>
    import( "../views/vw+vh.vue"),
  },
  
  {
    path: "/bilibili",
    component: () =>
    import( "../views/bilibili.vue"),
  },
  {
    path: "/mediaQuery",
    component: () =>
    import( "../views/mediaQuery.vue"),
  },
  {
    path: "/bootstrapFirstTry",
    component: () =>
    import( "../views/bootstrapFirstTry.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
