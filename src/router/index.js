import Root from "../pages/client/Root";
import Home from "../pages/client/Home";
import Features from "../pages/client/Features";
import Pricing from "../pages/client/Pricing";
import Resources from "../pages/client/Resources";

export const ROUTE = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "features",
                element: <Features />,
            },
            {
                path: "pricing",
                element: <Pricing />,
            },
            {
                path: "resources",
                element: <Resources />,
            },
        ],
    },
]