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

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

    return (
        <>
            <Sidebar
                variant={variants?.navigation}
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
            />
            <Box ml={!variants?.navigationButton && 200}>
                <Header
                    showSidebarButton={variants?.navigationButton}
                    onShowSidebar={toggleSidebar}
                />
                <Outlet />
            </Box>
        </>
    );
};
export default AdminLayout;
