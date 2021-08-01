import {useState} from "react";
import Button from 'react-bootstrap/Button';

function ItemCount({itemDetail, onAdd, onSub, quantity}) {

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
