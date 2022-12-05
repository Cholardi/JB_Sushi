import React from "react";
import "./CartItem.css";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ product }) => {
    const { removeItemFromCart } = useCartContext();
    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <img src={product.img} alt={product.name} className="cart-item-img" />
                <div>
                    <p className="cart-item-prod-name">{product.name}</p>
                    <p>Cantidad: {product.amount}</p>
                    <p>Precio por persona: ${product.price}</p>
                    <p>Subtotal: ${product.price * product.amount}</p>
                </div>
            </div>
            <button className="remove-from-cart-button" onClick={() => removeItemFromCart(product.id)}>
                x
            </button>
        </div>
    );
};

export default CartItem;
