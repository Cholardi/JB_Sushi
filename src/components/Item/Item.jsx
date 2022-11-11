import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ productFullObject }) => {
    const onAdd = (amount) => {
        console.log(`Compraste ${amount} unidades`);
    };

    return (
        <div className="product-card">
            <Link to={`/item/${productFullObject.id}`} className="product">
                <img src={productFullObject.img} alt={productFullObject.name} />
                <p className="product-name">{productFullObject.name}</p>
            </Link>
            <ItemCount initial={1} stock={7} onAdd={onAdd}/>
        </div>
    );
};

export default Item;
