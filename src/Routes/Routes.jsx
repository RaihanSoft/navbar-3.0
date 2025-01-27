import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
    },
]);