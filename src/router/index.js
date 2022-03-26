import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "iconfontTest",
    component: () =>
    import( "../views/iconfontTest.vue"),
  },
  {
    path: "/scaleTest",
    name: "iconfontTest",
    component: () =>
    import( "../views/scaletest.vue"),
  },
  {
    path: "/gradient",
    name: "iconfontTest",
    component: () =>
    import( "../views/gradientTest.vue"),
  },
  {
    path: "/animation3D",
    name: "iconfontTest",
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
