import Vue from "vue";
import Vuex from "vuex";

import content from "./content";
import pagination from "./pagination";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    content,
    pagination,
  },
});
