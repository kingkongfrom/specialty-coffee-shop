
import {
    Box,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    VStack, Text, Flex
} from "@chakra-ui/react";
import Logo from "../../../ui/Logo.jsx";
import { MdSpaceDashboard } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import SidebarButton from "./SidebarButton.jsx";

//Sidebar Content defined with a vertical stack with buttons
const SidebarContent = ({ variant , hover }) => (
    <VStack className='text-colorBase dark:text-colorDark'>
        <Box className='invisible h-[50px] md:visible md:h-auto'>
            <Logo/>
        </Box>

        <SidebarButton hover={hover} variant={variant} path='/admin' name='Inicio'>
            <MdSpaceDashboard size={30} />
        </SidebarButton>

        <SidebarButton hover={hover} variant={variant} path='/admin/products' name='Productos'>
            <FaClipboardList size={30} />
        </SidebarButton>

    </VStack>
)
//Sidebar component
const Sidebar = ({ isOpen, variant, onClose, hover, setHover }) => {
    
    return variant === "sidebar" ? (
        <Box
            position="fixed"
            left={0}
            p={5}
            w={hover ? '200px': '100px'}
            top={0}
            h="100%"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            style={{ transition: 'width 0.3s ease' }}
            className='bg-colorDark dark:bg-colorBase'
        >
            <SidebarContent variant={variant} hover={hover} />
        </Box>
    ) : (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent className='bg-colorDark dark:bg-colorBase'>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <SidebarContent variant={variant}/>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
}

export default Sidebar
