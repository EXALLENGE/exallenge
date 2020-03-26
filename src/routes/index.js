import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login";
import Register from "../components/Register";
import ForgetPassword from "../components/ForgetPassword";
import CoursesPage from "../components/CoursesPage";
import ReviewsPage from "../components/ReviewsPage";
import FeedbackPage from "../components/FeedbackPage";
import InDevelopment from "../components/InDevelopment";
import UserCourses from "../components/UserCourses";
import UserSettings from "../components/UserSettings";
import DescriptionCourse from "../components/DescriptionCourse";
import EnrollCourse from "../components/EnrollCourse";
import EnrollWithMessage from "../components/EnrollWithMessage";
import Task from "../components/Task";
import Sql from "../components/Sql";
import Main from "../components/Main";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/forget-password",
      name: "ForgetPassword",
      component: ForgetPassword
    },
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/courses",
      name: "CoursesPage",
      component: CoursesPage
    },
    {
      path: "/reviews",
      name: "ReviewsPage",
      component: ReviewsPage
    },
    {
      path: "/feedback",
      name: "FeedbackPage",
      component: FeedbackPage
    },
    {
      path: "/in-development",
      name: "InDevelopment",
      component: InDevelopment
    },
    {
      path: "/description/:course",
      name: "DescriptionCourse",
      component: DescriptionCourse
    },
    {
      path: "/user/courses",
      name: "UserCourses",
      component: UserCourses
    },
    {
      path: "/user/settings",
      name: "UserSettings",
      component: UserSettings
    },
    {
      path: "/enroll/:course",
      name: "Enroll",
      component: EnrollCourse
    },
    {
      path: "/enroll-with-message/:course",
      name: "EnrollWithMessage",
      component: EnrollWithMessage
    },
    {
      path: "/course/:course/:task",
      name: "Task",
      component: Task
    },
    {
      path: "/sql",
      component: Sql
    }
  ]
});


export default router;
