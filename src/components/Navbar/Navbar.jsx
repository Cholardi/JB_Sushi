import "./Navbar.css";
import logo from "../../images/logo.jpg";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to={"/"} className="logo-container">
                <img src={logo} className="App-logo" alt="logo" />
            </NavLink>
            <div className="menu">
                <ul className="items-menu">
                    <li>
                        <NavLink to={"/"} className="menu-item">
                            INICIO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/traditional"} className="menu-item">
                            EXPERIENCIAS TRADICIONALES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/premium"} className="menu-item">
                            EXPERIENCIAS PREMIUM
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/quienes-somos"} className="menu-item">
                            QUIÉNES SOMOS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contacto"} className="menu-item">
                            CONTACTO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/cart"} className="menu-item">
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
