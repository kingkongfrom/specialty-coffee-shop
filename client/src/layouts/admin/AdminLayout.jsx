import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import Navigation from "../../ui/Navigation.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../../ui/Footer.jsx";
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { useState } from "react";
//Const to define the variants: if the content is displayed as a sidebar or as a drawer
const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

const AdminLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const variants = useBreakpointValue({ base: smVariant, md: mdVariant })
    const [hoverSidebar, setHoverSidebar] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

    return (
        <main className='min-h-screen bg-gray-50 dark:bg-colorDark dark:text-colorBase' >
            <Sidebar
                variant={variants?.navigation}
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
                hover={hoverSidebar}
                setHover={setHoverSidebar}
            />
            <Box ml={!variants?.navigationButton && (hoverSidebar ? 200 : 100)} style={{ transition: 'margin 0.3s ease' }} >
                <Header
                    showSidebarButton={variants?.navigationButton}
                    onShowSidebar={toggleSidebar}
                />
                <Outlet />
            </Box>
        </main>
    );
};
export default AdminLayout;
