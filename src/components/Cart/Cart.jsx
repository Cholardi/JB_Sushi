import React from "react";
import "./Cart.css";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const Cart = () => {
    const { cart, totalPrice, processingCostFee, clearCart, checkoutMessage } = useCartContext();

    const emptyCartMessage = (
        <>
            <p>El carrito está vacío.</p>
            <Link to="/">Continuar Explorando</Link>
        </>
    );

    const order = {
        buyer: {
            name: "Jorge Pepoide",
            email: "jojoj@gmail.com",
        },
        items: cart,
        total: totalPrice(),
    };

    const checkout = () => {
        let productsPurchasedList = [];
        order.items.forEach((product) => {
            productsPurchasedList.push(`${product.name} ${product.amount}x $${product.price}`);
        });
        productsPurchasedList.push(`Tarifa de procesamiento: $${processingCostFee}`);
        productsPurchasedList = productsPurchasedList.join("<br>");
        const firestoreDb = getFirestore();
        const ordersCollection = collection(firestoreDb, "orders");
        addDoc(ordersCollection, order).then((madeOrder) => {
            checkoutMessage(madeOrder.id, productsPurchasedList, order.total);
            clearCart();
        });
    };

    return (
        <div className="cart-container">
            <div className="cart-items-container">
                {cart.length === 0 ? emptyCartMessage : cart.map((product) => <CartItem key={product.id} product={product} />)}
            </div>
            {cart.length !== 0 ? (
                <>
                    <p className="total-price">Total a Pagar: ${totalPrice()}</p>
                    <p>(Tarifa de procesamiento de la orden: ${processingCostFee})</p>
                    <form className="checkout-form">
                        <label htmlFor="name">Ingrese su Nombre y Apellido (Comprador)</label>
                        <input className="text-input" type="text" name="name" id="name" />
                        <label htmlFor="name">Ingrese su Email</label>
                        <input className="text-input" type="email" name="email" id="email" />
                        <label htmlFor="name">Confirme su Email</label>
                        <input className="text-input" type="email" name="email-confirmation" id="email-confirmation" />
                        <button className="checkout-button" onClick={checkout}>
                            Reservar Lugares
                        </button>
                    </form>
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default Cart;
