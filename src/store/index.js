import Vue from "vue";
import Vuex from "vuex";

import productos from "./modulo-productos";

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      user: "asd@ottoklaus.com",
      pass: "asdf1234",
      currentUser: null
    },
    mutations: {
      LOG_IN: (state, user) => {
        state.currentUser = user;
      },
      LOG_OUT: state => {
        state.currentUser = null;
      }
    },
    actions: {
      logIn: ({ commit, state }, { user, pass }) => {
        console.log("logIn():", { user, pass });

        state.user === user && state.pass === pass
          ? commit("LOG_IN", user)
          : console.log("Usuario o contraseña inválidos");
      },
      logOut: ({ commit }) => {
        commit("LOG_OUT");
      }
    },
    modules: {
      productos
    },
    strict: process.env.DEV
  });

  return Store;
}
