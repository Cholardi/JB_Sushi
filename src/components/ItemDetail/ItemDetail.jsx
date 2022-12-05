import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addItemToCart } = useCartContext();

    const onAdd = (amount) => {
        setGoToCart(true);
        addItemToCart(data, amount);
    };

    return (
        <div className="item-detail-container">
            <img className="item-detail-img" src={data.imgDetail} alt={data.name} />
            <div className="content">
                <h1 className="item-detail-name">{data.name}</h1>
                <p className="item-detail-desc">{data.description}</p>
                <p className="item-detail-price">
                    <span className="item-detail-price-num">${data.price}</span>/persona
                </p>
                {goToCart ? <Link to="/cart">Ir al Carrito</Link> : <ItemCount initial={1} stock={12} onAdd={onAdd} />}
            </div>
        </div>
    );
};

export default ItemDetail;
