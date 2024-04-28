import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import Home from "./pages/Home.jsx";

function App() {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                { path: "/", element: <Home /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
