import "./Item.css";

import React from "react";

const Item = ({productFullObject}) => {
    return(
        <a href="#" className="product">
            <img src={productFullObject.img} alt={productFullObject.name} />
            <p className="product-name">{productFullObject.name}</p>
        </a>
    )
}

export default Item;