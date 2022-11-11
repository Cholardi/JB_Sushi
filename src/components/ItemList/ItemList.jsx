import "./ItemList.css";
import React from "react";
import Item from "../Item/Item";

const ItemList = ({data}) => {
    return data.map((prod) => <Item key={prod.id} productFullObject={prod}/>);
};

export default ItemList;
