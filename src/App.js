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
            </header>
            <section>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Sushi de Autor | 🍣 Eventos de Sushi" />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/quienes-somos" element={<ItemListContainer />} />
                    <Route path="/contacto" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </section>
        </div>
    );
}

export default App;
