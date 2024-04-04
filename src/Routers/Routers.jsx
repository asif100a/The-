import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home";
import ErrorPage from "../Components/Pages/ErrorPage";
import AuthProvider from "../Components/AuthProvider/AuthProvider";
import About from "../Components/Pages/About";
import Career from "../Components/Pages/Career";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/career',
                element: <Career />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
]);

const Routers = () => {
    return (
        <div>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </div>
    );
};

export default Routers;