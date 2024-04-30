import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import Error from "./ui/Error.jsx";
import Home from "./pages/Home.jsx";
import StoreLayout from "./layouts/StoreLayout.jsx";
import FrontStore from "./pages/FrontStore.jsx";
import AdminLayout from "./layouts/admin/AdminLayout.jsx";
import AdminPage from "./pages/admin/AdminPage.jsx";
import AddCoffeePage from "./pages/admin/AddCoffeePage.jsx";
import ProductsPage from "./pages/admin/ProductsPage.jsx";

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
            children: [
                { path: "/admin", element: <AdminPage /> },
                { path: "/admin/products/", element: <ProductsPage /> },
                { path: "/admin/products/coffee/add", element: <AddCoffeePage /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
