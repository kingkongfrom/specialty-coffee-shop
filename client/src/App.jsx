import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import Home from "./pages/Home.jsx";
import StoreLayout from "./ui/StoreLayout.jsx";
import FrontStore from "./features/store/FrontStore.jsx";

function App() {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                { path: "/", element: <Home /> }
            ],
        },
        {
            element: <StoreLayout />,
            errorElement: <Error />,
            children: [
                {path: "store", element: <FrontStore/>}
            ]
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
