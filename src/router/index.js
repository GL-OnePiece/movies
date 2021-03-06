import Vue from "vue";
import VueRouter from "vue-router";
import movieRouter from "./movie";
import mineRouter from "./mine";
import cinemaRouter from "./cinema";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      path: "/",
      redirect: "movie",
    },
    {
      path: "/movie/nowPlaying/movieIn",
      name: "MovieIn",
      component: () => import("@/components/MovieIn"),
    },
  ],
});
