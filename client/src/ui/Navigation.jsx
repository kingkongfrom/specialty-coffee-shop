/**
 * Navigation component for creating a responsive navigation bar with mobile menu support.
 * @module Navigation
 */

import { useIsMobile } from "../hooks/useIsMobile";
import { NavLink } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

const Navigation = () => {
    const isMobile = useIsMobile();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    /**
     * Toggles the visibility of the mobile menu.
     */
    const toggleMobileMenu = () => {
        setShowMobileMenu((prevState) => !prevState);
    };

    /**
     * Closes the mobile menu.
     */
    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };

    useEffect(() => {
        /**
         * Event handler to handle resize events and close the mobile menu if the device is no longer mobile.
         */
        const handleResize = () => {
            if (!isMobile) {
                setShowMobileMenu(false);
            }
        };

        window.addEventListener("resize", handleResize); // Adding event listener for window resize

        return () => window.removeEventListener("resize", handleResize); // Removing event listener on component unmount
    }, [isMobile]);

    // Effect to toggle body overflow based on mobile menu visibility
    useEffect(() => {
        document.body.style.overflow = showMobileMenu ? "hidden" : ""; // Prevent scrolling when mobile menu is open

        return () => {
            document.body.style.overflow = ""; // Reset body overflow style on component unmount
        };
    }, [showMobileMenu]); // Dependency array containing showMobileMenu state

    return (
        <nav className="flex h-16 items-center justify-between px-6 text-stone-100">
            <div>LOGO</div>
            {/* Button to toggle mobile menu */}
            <button
                onClick={toggleMobileMenu}
                className={`z-50 block md:hidden ${showMobileMenu ? "hidden" : ""}`}
            >
                {/* Hamburger menu icon */}
                <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            {/* Render mobile menu if showMobileMenu is true and the device is mobile */}
            {showMobileMenu && isMobile && (
                <div className="fixed right-0 top-0 z-50 flex min-h-screen w-full translate-x-0 transform items-center justify-center bg-white bg-opacity-15 shadow-lg backdrop-blur-lg transition-transform duration-1000">
                    <div className="mb-[150px] flex flex-col gap-4 text-center">
                        {/* Mobile menu links */}
                        <NavLink
                            to="/"
                            className="text-2xl"
                            onClick={closeMobileMenu}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="#"
                            className="text-2xl"
                            onClick={closeMobileMenu}
                        >
                            Tienda
                        </NavLink>
                        <NavLink
                            to="#"
                            className="text-2xl"
                            onClick={closeMobileMenu}
                        >
                            Contacto
                        </NavLink>
                        <NavLink
                            to="#"
                            className="text-2xl"
                            onClick={closeMobileMenu}
                        >
                            Cuenta
                        </NavLink>
                    </div>
                    {/* Close mobile menu button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="absolute right-2 top-3 mr-4 mt-1"
                    >
                        {/* Close icon */}
                        <svg
                            className="h-8 w-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 18L18 6M6 6l12 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            )}

            {/* Render desktop menu if the device is not mobile */}
            {!isMobile && (
                <Fragment>
                    {/* Desktop menu links */}
                    <div className="flex gap-8">
                        <NavLink to="/" className="text-lg">
                            Inicio
                        </NavLink>
                        <NavLink to="#" className="text-lg">
                            Tienda
                        </NavLink>
                        <NavLink to="#" className="text-lg">
                            Contacto
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="#" className="text-lg">
                            Cuenta
                        </NavLink>
                    </div>
                </Fragment>
            )}
        </nav>
    );
};

export default Navigation;
