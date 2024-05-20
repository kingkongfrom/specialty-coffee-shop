import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";

const MainLayout = () => {
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

export default MainLayout;
