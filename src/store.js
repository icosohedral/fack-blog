// src/store.js

import { createStore } from 'vuex';
import api from './api'; // 引入你的 API 模块

const store = createStore({
  state: {
    token: null,
    user: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearAuth(state) {
      state.token = null;
      state.user = null;
    }
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await api.login({ username, password });
        if (response.data.result) {
          commit('setToken', response.data.token);
          commit('setUser', response.data.user);
          return { success: true };
        } else {
          return { success: false, error: response.data.err };
        }
      } catch (error) {
        return { success: false, error: error.message };
      }
    },
    logout({ commit }) {
      commit('clearAuth');
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    getToken(state) {
      return state.token;
    },
    getUser(state) {
      return state.user;
    }
  }
});

export default store;
