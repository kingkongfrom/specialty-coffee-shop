import { useEffect, useState } from "react";

/**
 * Custom hook to determine if the device is in a mobile view.
 * @returns {boolean} A boolean value indicating if the device is in a mobile view.
 */
export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        /**
         * Event handler to update isMobile state based on window width.
         */
        const handleResize = () => {
            const isMobileDevice = window.innerWidth <= 768; // Adjust breakpoint as needed
            setIsMobile(isMobileDevice);
        };

        window.addEventListener("resize", handleResize); // Adding event listener for window resize

        handleResize(); // Calling handleResize on initial render to set initial state

        return () => window.removeEventListener("resize", handleResize); // Removing event listener on component unmount
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return isMobile;
};