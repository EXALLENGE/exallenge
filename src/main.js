import Vue from "vue";
import App from "./App.vue";
import * as firebase from "firebase";
import store from "./store";
import router from "./routes";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyAIjQ5hFc-svbUwyvqvu7Unj8z_Y02XJSM",
  authDomain: "socialape-d65e6.firebaseapp.com",
  databaseURL: "https://socialape-d65e6.firebaseio.com",
  projectId: "socialape-d65e6",
  storageBucket: "socialape-d65e6.appspot.com",
  messagingSenderId: "637038504447",
  appId: "1:637038504447:web:2da41b6a09b098e6ed1fca",
  measurementId: "G-Z57CEXD9M6"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
