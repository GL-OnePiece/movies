import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: [],
    filmv: [],
    getName: "",
    all: [],
  },
  mutations: {
    push(state, img) {
      state.num = img;
    },
    add(state, fmv) {
      state.filmv = fmv;
    },
    getall(state, amv) {
      state.all = amv;
    },
    changeName(state, name) {
      state.getName = name;
    },
  },
  getters: {
    // sendList(state) {
    //   state.filmv = state.filmv.filter((item) => {
    //     if (item.mtype == state.getName) {
    //       return item;
    //     }
    //   });
    //   return state.filmv;
    // },
  },
  actions: {},
  modules: {},
});
