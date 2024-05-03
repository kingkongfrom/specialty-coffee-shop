import React, { useState, useEffect } from 'react';
import { IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    // State to check if dark mode is enabled, state for Tailwind
    const [darkMode, setDarkMode] = useState(false);

    // Effect to read the theme from local storage
    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark';
        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleTheme = () => {
        const isDark = !darkMode;
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    };

    return (
        <IconButton
            icon={darkMode ? <FaSun /> : <FaMoon /> }
            isRound={true}
            size="lg"
            alignSelf="flex-end"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        />
    );
};

export default ThemeToggle;
