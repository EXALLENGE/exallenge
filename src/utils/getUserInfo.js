import firebase from "firebase";
import store from "../store";
import router from "../routes";

function checkRouter() {
  let authRoutes = ["Login", "Register", "ForgetPassword"]; 
  let independentRoutes = ["Main", "CoursesPage", "ReviewsPage", "FeedbackPage", "InDevelopment", "DescriptionCourse"];
  let lmsRoutes = ["UserCourses", "UserSettings", "Enroll", "Task"];
  if (independentRoutes.includes(router.currentRoute.name)){
    return;
  }
  else if (authRoutes.includes(router.currentRoute.name) && store.user.loggedIn) {
    this.$router.push({ name: "CoursesPage" });
  }
  else if (lmsRoutes.includes(router.currentRoute.name) && !store.user.loggedIn) {
    this.$router.push({ name: "Login" });
  }
}

export default function getUserInfo() {
  console.log(router.currentRoute); // eslint-disable-line no-console  
  if (store.state.user.getDataFromFirebase) {
    checkRouter();
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
    checkRouter();
  });
}
