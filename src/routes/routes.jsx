import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Property from "../Pages/Property/Property";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../Pages/Error/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/FakeData.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/cards/:id',
                element: <PrivateRoutes><Property></Property></PrivateRoutes>,
                loader: () => fetch('/FakeData.json')
            }
        ]
    }
]);

export default router;