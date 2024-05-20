import { useLocation } from 'react-router-dom';
import Navigation from "./Navigation.jsx";

export default function Header(){
    //Gets current route to determine if its at Home
    const location = useLocation();
    const isHome = location.pathname === '/';

    return(
        <header
            className={`${isHome ? 'relative min-h-screen bg-background-header bg-cover bg-center bg-no-repeat' : 'bg-colorDark'}`}>
            <div className={isHome ? 'absolute inset-0 bg-gradient-to-b from-black opacity-30' : null}>
            </div>
            <div className="relative z-10">
                <Navigation />
            </div>
        </header>
    )
}