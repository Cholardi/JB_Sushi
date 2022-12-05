import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
    const [data, setData] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        const firestoreDb = getFirestore();
        const collectionRef = collection(firestoreDb, "products");
        if (category) {
            const collectionFilter = query(collectionRef, where("category", "==", category));
            getDocs(collectionFilter)
            .then((response) => setData(response.docs.map((product) => ({ id: product.id, ...product.data() }))));
        } else {
            getDocs(collectionRef)
            .then((response) => setData(response.docs.map((product) => ({ id: product.id, ...product.data() }))));
        }
    }, [category]);

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
