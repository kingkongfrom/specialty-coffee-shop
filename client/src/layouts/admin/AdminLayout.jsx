import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import LoaderFull from "../../ui/LoaderFull.jsx";

//Const to define the variants: if the sidebar content is displayed as a sidebar or as a drawer (mobile)
const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

const AdminLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const variants = useBreakpointValue({ base: smVariant, md: mdVariant })
    const [hoverSidebar, setHoverSidebar] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()

    //Effect to redirect to the Sign-In Page if the user is not signed in
    //https://clerk.com/docs/references/react/add-react-router - Step-3
    useEffect(() => {
        if (isLoaded && !userId) {
            navigate("/admin/sign-in")
        }
    }, [isLoaded])

    if (!isLoaded) return <main className='bg-colorDark h-screen'><LoaderFull /></main>

    return (
        <main className='min-h-screen bg-gray-50 dark:bg-colorDark text-colorDark dark:text-colorBase'>
            <Sidebar
                variant={variants?.navigation}
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
                hover={hoverSidebar}
                setHover={setHoverSidebar}
            />
            <Box ml={!variants?.navigationButton && (hoverSidebar ? 200 : 100)}
                 style={{ transition: 'margin 0.3s ease' }}>
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
