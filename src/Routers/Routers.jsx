import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/Home";
import ErrorPage from "../Components/Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);

const Routers = () => {
    return (
        <div>
           <RouterProvider router={router} /> 
        </div>
    );
};

export default Routers;