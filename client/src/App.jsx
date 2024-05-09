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
import SignInPage from "./pages/admin/SignInPage.jsx";
import AdminAuth from "./layouts/admin/AdminAuth.jsx";

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
            //Receives Admin Auth with Clerk Provider
            //https://clerk.com/docs/references/react/add-react-router - Step 4
            element: <AdminAuth />,
            children: [
                { path: "/admin/sign-in/*", element: <SignInPage /> },
                {
                    element: <AdminLayout />,
                    children: [
                        { path: "/admin", element: <AdminPage /> },
                        { path: "/admin/products/", element: <ProductsPage /> },
                        {
                            path: "/admin/products/coffee/add",
                            element: <AddCoffeePage />,
                        },
                    ],
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
