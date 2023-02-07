import { useState } from "react";
import './itemCounter.css'


const ItemCount = ({ maxValue, handleAdd }) => {

    const [quantity, setQuantity] = useState(1)

    const addProduct = () => quantity === maxValue ? null : setQuantity(quantity + 1)
    const removeProdcut = () => quantity === 1 ?  null : setQuantity(quantity - 1)

    const handleClick = () => {
        handleAdd(quantity)
    }

    return (
        <div className='counter'>
            <button onClick={removeProdcut}>-</button>
            <span>{quantity}</span>
            <button onClick={addProduct}>+</button>
            <button onClick={handleClick}>Agregar al carrito</button>
        </div>

    )
};

export default ItemCount