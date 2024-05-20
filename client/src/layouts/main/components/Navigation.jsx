import { useIsMobile } from "../../../hooks/useIsMobile.js";
import { Link, NavLink } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import logo from "../../../../public/images/logo.png";
import Logo from "../../../ui/Logo.jsx";
import { FaRegUserCircle } from "react-icons/fa";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import SignInButton from "./SignInButton.jsx";

const Navigation = () => {
    //Const to Store the Paths and Routes
    const navOptions = [
        { name: "Inicio", path: "/"},
        { name: "Tienda", path: "/store"},
        { name: "Contacto", path: "#"},
    ];
    const isMobile = useIsMobile();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu((prevState) => !prevState);
    };

    console.log(logo);
    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (!isMobile) {
                setShowMobileMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    useEffect(() => {
        document.body.style.overflow = showMobileMenu ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [showMobileMenu]);

    return (
        <nav className="relative flex h-24 items-center font-serif font-extralight justify-between px-6 text-stone-100">
            <Logo />
            <button onClick={toggleMobileMenu} className={`z-50 block md:hidden ${showMobileMenu ? "hidden" : ""}`}>
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" fill="currentColor" />
                </svg>
            </button>
            {showMobileMenu && isMobile && (
                <div className="fixed right-0 top-0 z-50 flex min-h-screen w-full translate-x-0 transform
                     items-center justify-center bg-colorPrimary bg-opacity-50 shadow-lg backdrop-blur-lg
                     transition-transform duration-1000"
                >
                    <div className="mb-[150px] flex flex-col gap-4 text-center">
                        {navOptions.map((option) => {
                            return (
                                <NavLink
                                    to={option.path}
                                    className={`text-2xl ${
                                        showMobileMenu ? "opacity-100" : "opacity-0"
                                    }`}
                                    onClick={closeMobileMenu}
                                >
                                    {option.name}
                                </NavLink>
                            )
                        })}
                    </div>
                    <button
                        onClick={toggleMobileMenu}
                        className="absolute right-2 top-7 mr-4 mt-1"
                    >
                        <svg
                            className="h-10 w-10"
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
            {!isMobile && (
                <Fragment>
                    <div className="flex gap-24 text-md">
                        {navOptions.map((option) => <Link to={option.path}>{option.name}</Link>)}
                    </div>
                </Fragment>
            )}
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl={window.location.href} appearance={{elements:{userButtonAvatarBox:'w-11 h-11',userButtonPopoverFooter:'hidden'}}}/>
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navigation;
