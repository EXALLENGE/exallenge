import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login";
import Register from "../components/Register";
import Courses from "../components/Courses";
import ReviewsPage from "../components/ReviewsPage";
import FeedbackPage from "../components/FeedbackPage";
import Main from "../components/Main";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/courses",
      name: "Courses",
      component: Courses
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
    }
  ]
});

export default router;
