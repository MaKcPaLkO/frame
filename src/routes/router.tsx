import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout";
import Placeholder from "../pages/placeholder";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Placeholder />
            }
        ]
    }
]);

export default router;
