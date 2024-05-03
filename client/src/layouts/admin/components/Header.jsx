import { Box, Center, IconButton, Text, Flex } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../ui/Logo.jsx";
import ThemeToggle from "../../../ui/ThemeToggle.jsx";

const Header = ({ showSidebarButton = true, onShowSidebar }) => {

    return (
        <Flex className='bg-colorDark dark:bg-colorDarker ' color="white" justifyContent="space-between" alignItems="center" px={5}>
            <Box >
                {showSidebarButton && (
                    <IconButton
                        icon={<GiHamburgerMenu  size={30} />}
                        className='text-colorBase'
                        variant="fill"
                        onClick={onShowSidebar}
                        aria-label="open sidebar"
                        ms={5}
                    />
                )}
            </Box>
            <Box className='visible md:invisible py-3 md:py-0'>
                <Box fontSize="xl"><Logo/></Box>
            </Box>

            <Box >
                <ThemeToggle />
            </Box>
        </Flex>
    )
}

export default Header;