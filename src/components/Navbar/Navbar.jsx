import logo from "../../images/logo.jpg";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="https://www.instagram.com/jb_sushi/" className="logo-container">
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <div className="menu">
                <ul className="items-menu">
                    <li>
                        <a href="" className="menu-item">INICIO</a>
                    </li>
                    <li>
                        <a href="" className="menu-item">EXPERIENCIAS</a>
                    </li>
                    <li>
                        <a href="" className="menu-item">RESERVAS</a>
                    </li>
                    <li>
                        <a href="" className="menu-item">QUIÉNES SOMOS</a>
                    </li>
                    <li>
                        <a href="" className="menu-item">CONTACTO</a>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
}
export default Navbar;
