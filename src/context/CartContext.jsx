import React, { useState, useContext } from "react";
import Swal from "sweetalert2";

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const processingCostFee = 250;
    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find((product) => product.id === id);

    const removeItemFromCart = (id) => setCart(cart.filter((product) => product.id !== id));

    const addItemToCart = (item, amount) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === item.id ? { ...product, amount: product.amount + amount } : product;
                })
            );
        } else {
            setCart([...cart, { ...item, amount }]);
        }
    };

    const totalPrice = () => {
        return cart.reduce((accumulator, product) => accumulator + product.amount * product.price, processingCostFee);
    };

    const totalProductAmount = () => {
        return cart.reduce((accumulator, product) => accumulator + product.amount, 0);
    };

    const checkoutMessage = (id, items, total) => {Swal.fire({
        title: "Reserva realizada exitosamente.",
        html: `<div>
                    <p>¡Gracias por tu compra!</p>
                    <p>ID de la reserva: ${id}</p>
                    <p>Productos: <br> ${items}</p>
                    <p>Monto Total: $${total}</p>
                </div>`,
        color: "white",
        icon: "success",
        background: "#353535",
        confirmButtonText: "Aceptar",
    })};

    return (
        <CartContext.Provider value={{ clearCart, isInCart, removeItemFromCart, addItemToCart, totalPrice, totalProductAmount, checkoutMessage, cart, processingCostFee }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
