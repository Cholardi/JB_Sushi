import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import React from "react";
import CartProvider from "./context/CartContext";

function App() {
    return (
        <div className="App">
            <CartProvider>
                <header className="App-header">
                    <Navbar />
                </header>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Sushi de Autor 🍣 | Mirá Nuestras Experiencias Disponibles:" />}/>
                    <Route path="/category/:category" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/quienes-somos" element={<ItemListContainer />} />
                    <Route path="/contacto" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </CartProvider>
        </div>
    );
}

export default App;
