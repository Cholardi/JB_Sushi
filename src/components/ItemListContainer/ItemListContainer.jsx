import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
        category: "Premium",
        description: "La verdadera experiencia del sushi blabla bla bla",
    },
    {
        id: 2,
        name: "Sapporo Experience",
        price: 8000,
        img: sapporoImg,
        category: "Premium",
        description: "Inolvidable y refinada aventura culinaria blabla bla bla",
    },
    {
        id: 3,
        name: "Kioto Experience",
        price: 6000,
        img: kiotoImg,
        category: "Traditional",
        description: "Un viaje pacífico por las regiones más zen de Japón blabla bla bla",
    },
    {
        id: 4,
        name: "Nagoya Experience",
        price: 4000,
        img: nagoyaImg,
        category: "Traditional",
        description: "Degustá los más auténticos sabores orientales blabla bla bla",
    },
];

function ItemListContainer({ greeting }) {
    const [data, setData] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        if (categoryId) {
            getData.then((result) => setData(result.filter((product) => product.category.toLowerCase() === categoryId)));
        } else {
            getData.then((result) => setData(result));
        }
    }, [categoryId]);

    return (
        <div className="home-item-list">
            <h1>{greeting}</h1>
            <div className="item-list">
                <ItemList data={data} />
            </div>
        </div>
    );
}

export default ItemListContainer;
