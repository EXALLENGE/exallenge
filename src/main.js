import Vue from "vue";
import VueResource from "vue-resource";
import VueFriendlyIframe from "vue-friendly-iframe";

import App from "./App.vue";
import * as firebase from "firebase";
import store from "./store";
import router from "./routes";

Vue.config.productionTip = false;


let configOptions = {
    apiKey: "AIzaSyA_doterJ-JqhgSZrtELtVUgWo_Jtf_9Sc",
    authDomain: "video-a6642.firebaseapp.com",
    projectId: "video-a6642",
    storageBucket: "video-a6642.appspot.com",
    messagingSenderId: "676052358619",
    appId: "1:676052358619:web:561215f2c67e4a061643fe",
    measurementId: "G-0L71LHQR20"
};

firebase.initializeApp(configOptions);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

Vue.use(VueResource);
Vue.use(VueFriendlyIframe);