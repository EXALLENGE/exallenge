import firebase from "firebase";
import store from "../store";
import router from "../routes";

export function checkRouter() {
  let authRoutes = ["Login", "Register", "ForgetPassword"];
  let lmsRoutes = ["UserCourses", "UserSettings", "Enroll", "Task"];
  if (
    authRoutes.includes(router.currentRoute.name) &&
    store.state.user.loggedIn
  ) {
    router.push({ name: "CoursesPage" });
  } else if (
    lmsRoutes.includes(router.currentRoute.name) &&
    !store.state.user.loggedIn
  ) {
    router.push({ name: "Login" });
  }
}

export function getUserInfo() {
  if (store.state.user.getDataFromFirebase) {
    return;
  }
  firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
    if (user) {
      const db = firebase.firestore();
      db.collection("users")
        .doc(user.email)
        .get()
        .then(doc => {
          store.commit("saveUserInfo", doc.data());
        });
    }
  });
}
