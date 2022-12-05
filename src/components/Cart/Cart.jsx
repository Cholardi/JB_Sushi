import React from "react";
import "./Cart.css";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const emptyCartMessage = (
        <>
            <p>El carrito está vacío.</p>
            <Link to="/">Continuar Explorando</Link>
        </>
    );

    const { cart, totalPrice, processingCostFee } = useCartContext();
    return (
        <>
            <div className="cart-items-container">
                {cart.length === 0 ? emptyCartMessage : cart.map((product) => <CartItem key={product.id} product={product} />)}
            </div>
            {cart.length !== 0 ? <> <p className="total-price">Total a Pagar: ${totalPrice()}</p>
            <p>(Tarifa de procesamiento de la orden: ${processingCostFee})</p>
            </> : ""}
            
        </>
    );
};

export default Cart;
