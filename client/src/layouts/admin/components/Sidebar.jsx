
import {
    Box,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerBody,
    DrawerContent,
    VStack, Text, Flex
} from "@chakra-ui/react";
import Logo from "../../../ui/Logo.jsx";
import { MdSpaceDashboard } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import SidebarButton from "./SidebarButton.jsx";
import ThemeToggle from "../../../ui/ThemeToggle.jsx";

//Sidebar Content defined with a vertical stack with buttons
const SidebarContent = ({ variant , hover }) => (
    <Flex direction='column' alignContent='space-between' h='90vh' className='text-colorBase'>
        <VStack className='flex-1'>
            <Box className='invisible h-[50px] md:visible md:h-auto md:mb-3'>
                <Logo className='w-20'/>
            </Box>

            <SidebarButton hover={hover} variant={variant} path='/admin' name='Inicio'>
                <MdSpaceDashboard size={30} />
            </SidebarButton>

            <SidebarButton hover={hover} variant={variant} path='/admin/products' name='Productos'>
                <FaClipboardList size={30} />
            </SidebarButton>
        </VStack>
        <Flex className={hover ? 'justify-start' : 'justify-center'}>
            <ThemeToggle />
        </Flex>
    </Flex>
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
            className='bg-colorDark dark:bg-colorDarker'
        >
            <SidebarContent variant={variant} hover={hover} />
        </Box>
    ) : (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent style={{backgroundColor:"#2B281C"}}>
                    <DrawerCloseButton color='white'/>
                    <DrawerBody>
                        <SidebarContent variant={variant}/>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    );
}

export default Sidebar
