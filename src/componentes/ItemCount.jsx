import {useState} from "react";
import Button from 'react-bootstrap/Button';

function ItemCount({itemDetail}) {

    const [quantity, setQuantity] = useState(1);

    //Función para agregar cantidad (guarda en estado "quantity")
    const onAdd = () => {
        setQuantity(quantity + 1)
        if (quantity === itemDetail.stock) {
            setQuantity(itemDetail.stock)
            alert("No hay más stock!")
        }
    }

    //Función para quitar cantidad (guarda en estado "quantity")
    const onSub = () => {
        setQuantity(quantity - 1)
        if (quantity === 1) {
            setQuantity(1)
        }
    }

    return (
        <div className="mb-3">
            <Button size="sm" onClick={onAdd}>+</Button>
            <Button size="sm" onClick={onSub}>-</Button>
            <span> Cantidad: {quantity}</span><br/>
            <div className="mt-3"><strong> Precio total: {quantity * itemDetail.price}</strong></div>
        </div>
    )
}

export default ItemCount
