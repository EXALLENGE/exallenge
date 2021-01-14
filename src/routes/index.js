import Vue from "vue";
import Router from "vue-router";
const Login = () =>
    import ("../components/Login");
const Register = () =>
    import ("../components/Register");
const ForgetPassword = () =>
    import ("../components/ForgetPassword");
const CoursesPage = () =>
    import ("../components/CoursesPage");
const ReviewsPage = () =>
    import ("../components/ReviewsPage");
const FeedbackPage = () =>
    import ("../components/FeedbackPage");
const InDevelopment = () =>
    import ("../components/InDevelopment");
const UserCourses = () =>
    import ("../components/UserCourses");
const UserSettings = () =>
    import ("../components/UserSettings");


const Main = () =>
    import ("../components/Main.vue");

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/mogrtio",
            name: "Main",
            component: Main,
        },
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
            redirect: "/login",
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
            path: "/user/courses",
            name: "UserCourses",
            component: UserCourses,
        },
        {
            path: "/user/settings",
            name: "UserSettings",
            component: UserSettings,
        }
    ],
});

export default router;