import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import Home from "./pages/Home.jsx";
import StoreLayout from "./layouts/StoreLayout.jsx";
import FrontStore from "./pages/FrontStore.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminPage from "./pages/AdminPage.jsx";

function App() {
    const router = createBrowserRouter([
        {
            element: <AppLayout />,
            errorElement: <Error />,
            children: [{ path: "/", element: <Home /> }],
        },
        {
            element: <StoreLayout />,
            errorElement: <Error />,
            children: [{ path: "/store", element: <FrontStore /> }],
        },
        {
            element: <AdminLayout />,
            errorElement: <Error />,
            children: [{ path: "/admin", element: <AdminPage /> }],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
