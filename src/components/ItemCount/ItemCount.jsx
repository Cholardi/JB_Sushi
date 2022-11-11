import "./ItemCount.css"
import { useState } from "react";

function ItemCount ({initial, stock, onAdd}){
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    return(
        <div className="item-count">
            <button className="amount-modifier" onClick={decrease} disabled={count<=1}>-</button>
            <span className="amount">{count}</span>
            <button className="amount-modifier" onClick={increase} disabled={count>=stock}>+</button>
            <div>
                <button className="add2cart-btn" disabled={stock<=0} onClick={()=>onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;