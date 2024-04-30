import Navigation from "../ui/Navigation.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer.jsx";

const AdminLayout = () => {
    return (
        <div>
            <div className="bg-colorDark">
                <Navigation />
            </div>
            <main className="mx-auto min-h-screen max-w-5xl overflow-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default AdminLayout;
