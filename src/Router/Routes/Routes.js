import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import MyReviews from "../../pages/Reviews/MyReviews";

import AddService from "../../pages/Services/AddService";
import Details from "../../pages/Services/Details";
import Services from "../../pages/Services/Services";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import PrivareRoute from "../PrivareRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myReviews',
                element: <PrivareRoute><MyReviews></MyReviews></PrivareRoute>
            },
            {
                path: '/addService',
                element: <PrivareRoute><AddService></AddService></PrivareRoute>
            }

        ]
    }
])

export default router;