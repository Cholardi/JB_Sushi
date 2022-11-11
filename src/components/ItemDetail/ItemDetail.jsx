import React from "react";

const ItemDetail = ({data}) =>{
    return(
    <div className="item-detail-container">
        <img className="item-detail-img" src={data.img} alt={data.name} />
        <div className="content">
            <h1 className="item-detail-name">{data.name}</h1>
        </div>
    </div>
    )
}

export default ItemDetail;