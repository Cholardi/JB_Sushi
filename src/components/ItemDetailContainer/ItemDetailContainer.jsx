import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const producto = {id: 1,
    name: "Tokio Experience",
    price: 7000,
    img: "https://content.r9cdn.net/rimg/dimg/45/5f/5788029f-city-25901-16737226b47.jpg?width=1366&height=768&xhint=1747&yhint=789&crop=true"}

const ItemDetailContainer = () =>{
    const [data, setData] = useState({});

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 2000);
        });

        getData.then(result => setData(result));
    }, [])

    return(
    <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer;