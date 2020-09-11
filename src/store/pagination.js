import {
  CURRENT_PAGE,
  PAGE_COUNT,
  NEXT_PAGE,
  PREV_PAGE,
  SET_PAGE,
  GOT_NEXT_PAGE,
  GOT_PREV_PAGE,
  POST_COUNT,
  ITEMS_PER_PAGE,
  SET_ITEMS_PER_PAGE,
} from "./constants";

const state = {
  currentPage: 1,
  itemsPerPage: 10,
};
const getters = {
  [CURRENT_PAGE]: ({ currentPage }) => currentPage,
  [GOT_NEXT_PAGE]: ({ currentPage, itemsPerPage }, rootGetters) => {
    return currentPage * itemsPerPage < rootGetters[POST_COUNT];
  },
  [ITEMS_PER_PAGE]: ({ itemsPerPage }) => itemsPerPage,
  [GOT_PREV_PAGE]: ({ currentPage }) => (currentPage > 1 ? true : false),
  [PAGE_COUNT]: ({ itemsPerPage }, rootGetters) => {
    return Math.floor(rootGetters[POST_COUNT] / itemsPerPage);
  },
};

const mutations = {
  [NEXT_PAGE]: (state) => {
    state.currentPage++;
  },
  [PREV_PAGE]: (state) => {
    state.currentPage--;
  },
  [SET_PAGE]: (state, num) => {
    state.currentPage = num;
  },
  [SET_ITEMS_PER_PAGE]: (state, count) => {
    state.currentPage = 1;
    state.itemsPerPage = count;
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
