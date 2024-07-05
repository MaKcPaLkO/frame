import {createBrowserRouter} from "react-router-dom";
import Place from '../Place.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Place />
    }
]);

export default router;
