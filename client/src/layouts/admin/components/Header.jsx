import { Box, Center, IconButton, Text, Flex } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../ui/Logo.jsx";

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
    return (
        <Flex bg="yellow.800" p={4} color="white" justifyContent="center" alignItems="center">
            <Box flex="1">
                {showSidebarButton && (
                    <IconButton
                        icon={<GiHamburgerMenu  w={8} h={8} />}
                        colorScheme="whiteAlpha"
                        variant="outline"
                        onClick={onShowSidebar}
                        aria-label="open sidebar"
                    />
                )}
            </Box>
            <Center flex="1" h="40px" py={8} className='visible md:invisible'>
                <Box fontSize="xl"><Logo/></Box>
            </Center>
            <Box flex="1" />
        </Flex>
    )
}

export default Header;