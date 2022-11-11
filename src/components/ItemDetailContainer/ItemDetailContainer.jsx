import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import tokioDetailImg from "../../images/tokio_detail.jpg";
import kiotoDetailImg from "../../images/kioto_detail.jpg";
import sapporoDetailImg from "../../images/sapporo_detail.jpg";
import nagoyaDetailImg from "../../images/nagoya_detail.jpg";
import { useParams } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Tokio Experience",
        price: 7000,
        img: tokioDetailImg,
        category: "Premium",
        description: "La verdadera experiencia del sushi blabla bla bla",
    },
    {
        id: 2,
        name: "Sapporo Experience",
        price: 8000,
        img: sapporoDetailImg,
        category: "Premium",
        description: "Inolvidable y refinada aventura culinaria blabla bla bla",
    },
    {
        id: 3,
        name: "Kioto Experience",
        price: 6000,
        img: kiotoDetailImg,
        category: "Traditional",
        description: "Un viaje pacífico por las regiones más zen de Japón blabla bla bla",
    },
    {
        id: 4,
        name: "Nagoya Experience",
        price: 4000,
        img: nagoyaDetailImg,
        category: "Traditional",
        description: "Degustá los más auténticos sabores orientales blabla bla bla",
    },
];

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        getData.then((result) => setData(result.find((product) => product.id === parseInt(id))));
    }, []);

    return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
