
import {
    Box,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerContent,
    VStack,
} from '@chakra-ui/react'
import Logo from "../../../ui/Logo.jsx";

//Sidebar Content defined with a vertical stack with buttons
const SidebarContent = ({ onClick }) => (
    <VStack>
        <Logo/>
        <Button onClick={onClick} w="100%">
            Home
        </Button>
        <Button onClick={onClick} w="100%">
            About
        </Button>
        <Button onClick={onClick} w="100%">
            Contact
        </Button>
    </VStack>
)
//Sidebar component
const Sidebar = ({ isOpen, variant, onClose }) => {
    return variant === 'sidebar' ? (
        <Box
            position="fixed"
            left={0}
            p={5}
            w="200px"
            top={0}
            h="100%"
            bg="yellow.800"
        >
            <SidebarContent onClick={onClose} />
        </Box>
    ) : (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
            <DrawerOverlay>
                <DrawerContent bg="yellow.800">
                    <DrawerCloseButton />
                    <DrawerBody>
                        <SidebarContent onClick={onClose} />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}

export default Sidebar
