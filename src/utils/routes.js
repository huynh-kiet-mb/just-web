import { Home, Page1 } from "../pages/main/index";
import { Login, Register,ForgotPass } from "../pages/login/index";

export const HomeRoutes = [
    {
        path: "/",
        element: Home
    },
    {
        path: "/page1",
        element: Page1
    }
];

export const LoginRoutes = [
    {
        path: "/login",
        element: Login
    },
    {
        path: "/register",
        element: Register
    },
    {
        path: "/forgot-passwords",
        element: ForgotPass
    },
];