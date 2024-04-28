import Navigation from "./Navigation.jsx";

const Header = () => {
    return (
        <header className="relative min-h-screen bg-background-header bg-cover bg-center bg-no-repeat">
            {/* Black transparent gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black opacity-30"></div>

            {/* Navigation component */}
            <div className="relative z-10">
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
