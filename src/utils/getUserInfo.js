import firebase from "firebase";
import store from "../store";
import router from "../routes";

export function checkRouter() {
  let authRoutes = ["Login", "Register", "ForgetPassword"];
  let lmsRoutes = [
    "UserCourses",
    "UserSettings",
    "Enroll",
    "EnrollWithMessage",
    "Task"
  ];
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

export function convertCourseResponseStruncture(course, user, courseFromRoute) {
  console.log(courseFromRoute); // eslint-disable-line no-console
  if ("meta" in course) {
    let courseProgress = 0;
    let taskNum = 0;
    let result = { courseId: courseFromRoute };
    result.chapters = [];
    if (courseFromRoute in user.courses) {
      courseProgress = user.courses[courseFromRoute];
      result.enrolled = true;
      result.lastTaskUrl = `/course/${courseFromRoute}/${courseProgress}`;
    }
    let courseMetaInfo = course.meta;
    result["name"] = courseMetaInfo["course_name"];
    result["description"] = courseMetaInfo["description"];
    for (const chapter in course) {
      if (chapter === "meta" || chapter === "meta.json") {
        continue;
      }
      let chapterInfo = {};
      let chapterMetaInfo = course[chapter].meta;
      chapterInfo["chapter_name"] = chapterMetaInfo["chapter_name"];
      chapterInfo.chapterItems = [];
      for (const chapterItem in course[chapter]) {
        if (chapterItem === "meta" || chapterItem === "meta.json") {
          continue;
        }
        let chapterItemMetaInfo = course[chapter][chapterItem].meta;
        console.log(chapterItemMetaInfo.task_name); // eslint-disable-line no-console
        let chapterItemInfo = {
          taskNum: taskNum,
          finished: false,
          title: chapterItemMetaInfo.task_name
        };
        if (courseProgress > 0) {
          chapterItemInfo.finished = true;
          courseProgress -= 1;
          taskNum += 1;
        }
        chapterInfo.chapterItems.push(chapterItemInfo);
      }
      result.chapters.push(chapterInfo);
    }
    return result;
  }
  return {};
}
