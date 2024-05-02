import { extendTheme } from '@chakra-ui/react';

// Example color mode configuration
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

// Define custom colors for light and dark modes
const colors = {
    colorBase: "#BBAA92",
    colorDark: "#2B281C",
};

const styles = {
    global: (props) => ({
        body: {
            bg: props.colorMode === 'light' ? 'gray.50' : 'colorDark',
            color: props.colorMode === 'light' ? 'colorDark' : 'colorBase',
        },
    }),
};

const theme = extendTheme({ config, colors, styles });
export default theme;