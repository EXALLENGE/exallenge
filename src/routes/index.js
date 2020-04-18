import Vue from "vue";
import Router from "vue-router";
const Login = () => import("../components/Login");
const Register = () => import("../components/Register");
const ForgetPassword = () => import("../components/ForgetPassword");
const CoursesPage = () => import("../components/CoursesPage");
const ReviewsPage = () => import("../components/ReviewsPage");
const FeedbackPage = () => import("../components/FeedbackPage");
const InDevelopment = () => import("../components/InDevelopment");
const UserCourses = () => import("../components/UserCourses");
const UserSettings = () => import("../components/UserSettings");
const DescriptionCourse = () => import("../components/DescriptionCourse");
const EnrollCourse = () => import("../components/EnrollCourse");
const EnrollWithMessage = () => import("../components/EnrollWithMessage");
const Task = () => import("../components/Task");
const Sql = () => import("../components/Sql.vue");
const Screenshot = () => import("../components/Screenshot.vue");

const Main = () => import("../components/Main.vue");

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/forget-password",
      name: "ForgetPassword",
      component: ForgetPassword,
    },
    {
      path: "/",
      name: "Main",
      component: Main,
    },
    {
      path: "/courses",
      name: "CoursesPage",
      component: CoursesPage,
    },
    {
      path: "/reviews",
      name: "ReviewsPage",
      component: ReviewsPage,
    },
    {
      path: "/feedback",
      name: "FeedbackPage",
      component: FeedbackPage,
    },
    {
      path: "/in-development",
      name: "InDevelopment",
      component: InDevelopment,
    },
    {
      path: "/description/:course",
      name: "DescriptionCourse",
      component: DescriptionCourse,
    },
    {
      path: "/user/courses",
      name: "UserCourses",
      component: UserCourses,
    },
    {
      path: "/user/settings",
      name: "UserSettings",
      component: UserSettings,
    },
    {
      path: "/enroll/:course",
      name: "Enroll",
      component: EnrollCourse,
    },
    {
      path: "/enroll-with-message/:course",
      name: "EnrollWithMessage",
      component: EnrollWithMessage,
    },
    {
      path: "/course/:course/:task",
      name: "Task",
      component: Task,
    },
    {
      path: "/sql",
      component: Sql,
    },
    {
      path: "/screenshot",
      component: Screenshot,
    },
  ],
});

export default router;
