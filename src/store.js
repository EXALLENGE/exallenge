import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      getDataFromFirebase: false,
      loggedIn: false,
      data: null,
      courses: {}
    },
    modal: {
      title: "Возникла ошибка.",
      text: "Мы получили ваше сообщение и в ближайшее время ответим вам."
    },
    courses: {}
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
      state.user.getDataFromFirebase = true;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },

    changeModalText(state, modalText) {
      state.modal.title = modalText.title;
      state.modal.text = modalText.text;
    },
    saveCourse(state, course) {
      state.courses[course.id] = course.data;
    },
    updateCourseInfo(state, course) {
      if (course in state.user.courses){
        state.user.courses[course] += 1 
      }
      else {
        state.user.courses[course] = 0
      }
    },
    saveUserInfo(state, userInfo){
      for (const userInfoItem in userInfo){
        state.user[userInfoItem] = userInfo[userInfoItem];
      }
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
