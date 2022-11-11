import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                <Routes>
                    {/* <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/experiencias" element={<ItemListContainer/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/reservas" element={<ItemListContainer/>}/>
                    <Route path="/quienes-somos" element={<ItemListContainer/>}/>
                    <Route path="/contacto" element={<ItemListContainer/>}/> */}
                </Routes>
            </header>
            <section>
                <ItemListContainer greeting="Sushi de Autor 🍣 Eventos de Sushi" />
                <ItemDetailContainer />
                <Cart />
            </section>
        </div>
    );
}

export default App;
