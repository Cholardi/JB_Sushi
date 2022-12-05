import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";
const Item = ({ productFullObject }) => {
    return (
        <div className="product-card">
            <Link to={`/item/${productFullObject.id}`} className="product">
                <img src={productFullObject.img} alt={productFullObject.name} />
                <p className="product-name">{productFullObject.name}</p>
            </Link>
        </div>
    );
};

export default Item;
