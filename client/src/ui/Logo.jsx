import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png";

const Logo = () => {
    return (
        <div className="w-24">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </div>
    );
};
export default Logo;
