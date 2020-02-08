import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },
    modal: {
      title: "Возникла ошибка.",
      text: "Мы получили ваше сообщение и в ближайшее время ответим вам."
    },
    courses: []
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },

    changeModalText(state, modalText) {
      state.modal.title = modalText.title;
      state.modal.text = modalText.text;
    },
    saveCourse(state, course) {
      let c = {};
      c[course.id] = course.data;
      state.courses.push(c);
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
