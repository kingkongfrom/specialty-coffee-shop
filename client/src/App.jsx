import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ui/Error.jsx";
import Home from "./pages/Home.jsx";
import FrontStore from "./pages/FrontStore.jsx";
import AdminLayout from "./layouts/admin/AdminLayout.jsx";
import AdminPage from "./pages/admin/AdminPage.jsx";
import AddCoffeePage from "./pages/admin/products/AddCoffeePage.jsx";
import ProductsPage from "./pages/admin/products/ProductsPage.jsx";
import SignInPage from "./pages/admin/SignInPage.jsx";
import AdminAuth from "./layouts/admin/AdminAuth.jsx";
import MainLayout from "./layouts/main/MainLayout.jsx";
import Auth from "./layouts/main/Auth.jsx";

function App() {
    //Receives Auth with Clerk Provider
    //https://clerk.com/docs/references/react/add-react-router - Step 4
    const router = createBrowserRouter([
        {
            element: <Auth />,
            children: [
                {
                    element: <MainLayout />,
                    // errorElement: <Error />,
                    children: [
                        { path: "/", element: <Home /> },
                        { path: "/store", element: <FrontStore /> },
                    ],
                },
            ],
        },
        {
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
