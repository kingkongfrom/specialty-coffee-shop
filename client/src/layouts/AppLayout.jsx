import Header from "../ui/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer.jsx";

const AppLayout = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <div className="flex-grow overflow-hidden">
                <main className="mx-auto max-w-5xl overflow-auto min-h-screen">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default AppLayout;


