import Navigation from "../ui/Navigation.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer.jsx";

const AdminLayout = () => {
    return (
        <div>
            <div className="bg-colorDark">
                <Navigation />
            </div>
            <main className="h-screen overflow-hidden">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default AdminLayout;
