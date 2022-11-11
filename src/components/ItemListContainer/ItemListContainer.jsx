import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";
import tokioImg from "../../images/tokio.jpg";
import kiotoImg from "../../images/kioto.jpg";
import sapporoImg from "../../images/sapporo.jpg";
import nagoyaImg from "../../images/nagoya.jpg";

const products = [
    {
        id: 1,
        name: "Tokio Experience",
        price: 7000,
        img: tokioImg,
    },
    {
        id: 2,
        name: "Sapporo Experience",
        price: 8000,
        img: sapporoImg,
    },
    {
        id: 3,
        name: "Kioto Experience",
        price: 6000,
        img: kiotoImg,
    },
    {
        id: 4,
        name: "Nagoya Experience",
        price: 4000,
        img: nagoyaImg,
    },
];

function ItemListContainer({ greeting }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getData.then((result) => setData(result));
    }, []);

    const onAdd = (amount) => {
        console.log(`Compraste ${amount} unidades`);
    };

    return (
        <div className="item-list">
            <ItemList data={data} />
            <p>{greeting}</p>
            <ItemCount initial={1} stock={7} onAdd={onAdd} />
        </div>
    );
}

export default ItemListContainer;
