import {
  LOAD_DATA,
  GET_USER,
  GET_POSTS,
  POST_COUNT,
  CURRENT_PAGE,
  ITEMS_PER_PAGE,
  SET_USERS,
  SET_POSTS,
} from "./constants";

import api from "@/services/api";

const state = {
  users: [],
  posts: [],
};
const getters = {
  [GET_USER]: ({ users }) => (id) => {
    return users.find((u) => u.id == id);
  },
  [GET_POSTS]: ({ posts }, rootGetters) => {
    return posts.slice(
      (rootGetters[CURRENT_PAGE] - 1) * rootGetters[ITEMS_PER_PAGE],
      rootGetters[CURRENT_PAGE] * rootGetters[ITEMS_PER_PAGE]
    );
  },
  [POST_COUNT]: ({ posts }) => posts.length,
};

const mutations = {
  [SET_USERS]: (state, users) => {
    state.users = users;
  },
  [SET_POSTS]: (state, posts) => {
    state.posts = posts;
  },
};

const actions = {
  [LOAD_DATA]: function({ commit }) {
    return new Promise((resolve) => {
      Promise.all([api.getUsers(), api.getPosts()]).then(
        async ([usrs, psts]) => {
          let users = await usrs.json();
          let posts = await psts.json();

          commit(SET_USERS, users);
          commit(SET_POSTS, posts);

          resolve();
        }
      );
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
