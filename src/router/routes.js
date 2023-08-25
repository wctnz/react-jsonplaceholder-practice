import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Posts from "../pages/Post";
import PostIdPage from "../pages/PostIdPage";

export const privateRoutes = [
    { path: "/", element: Home },
    { path: "/about", element: About },
    { path: "/posts", element: Posts },
    { path: "/posts/:id/", element: PostIdPage },
    { path: "/error", element: Error }
]

export const publicRoutes = [
    { path: "/login", element: Login }
]