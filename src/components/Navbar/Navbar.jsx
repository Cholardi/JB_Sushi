import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to={"/"} className="logo-container">
                <img src={"https://i.imgur.com/g0XNtEc.png"} className="App-logo" alt="logo" />
            </NavLink>
            <div className="menu">
                <ul className="items-menu">
                    <li>
                        <NavLink to={"/"} className="menu-item">
                            INICIO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/Tradicional"} className="menu-item">
                            EXPERIENCIAS TRADICIONALES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/Premium"} className="menu-item">
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
                </ul>
                <div className="cart-widget-wrapper">
                    <NavLink to={"/cart"} className="cart-widget-container">
                        <CartWidget />
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
