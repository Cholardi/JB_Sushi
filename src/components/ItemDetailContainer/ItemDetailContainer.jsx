import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const firestoreDb = getFirestore();
        const docRef = doc(firestoreDb, "products", id);
        getDoc(docRef)
        .then((reponse) => setData({id: reponse.id, ...reponse.data()}));
    }, [id]);

    return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
