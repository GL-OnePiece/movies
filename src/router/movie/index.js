export default {
  path: "/movie",
  component: () => import("@/views/Movie"),

  children: [
    {
      path: "home",
      name: "Home",
      component: () => import("@/components/Home"),
    },
    {
      path: "nowPlaying",
      name: "NowPlaying",
      component: () => import("@/components/NowPlaying"),
    },
    {
      path: "comingSoon",
      name: "ComingSoon",
      component: () => import("@/components/ComingSoon"),
    },
    {
      path: "search",
      name: "Search",
      component: () => import("@/components/Search"),
    },
    {
      path: "/movie",
      // name: "Movie",
      redirect: "/movie/nowPlaying",
    },
  ],
};
