import { Box, Center, IconButton, Text, Flex } from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../ui/Logo.jsx";
import ThemeToggle from "../../../ui/ThemeToggle.jsx";

const Header = ({ showSidebarButton = true, onShowSidebar }) => {

    return (
        <Flex className='bg-colorDark dark:bg-colorBase' color="white" justifyContent="space-between" alignItems="center" px={5}>
            <Box >
                {showSidebarButton && (
                    <IconButton
                        icon={<GiHamburgerMenu  w={8} h={8} />}
                        className='text-colorBase dark:text-colorDark'
                        variant="fill"
                        onClick={onShowSidebar}
                        aria-label="open sidebar"
                        ms={5}
                    />
                )}
            </Box>
            <Box className='visible md:invisible py-3 '>
                <Box fontSize="xl"><Logo/></Box>
            </Box>

            <Box >
                <ThemeToggle />
            </Box>
        </Flex>
    )
}

export default Header;