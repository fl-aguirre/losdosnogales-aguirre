import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemDetail({itemDetail, onAdd, onSub, addCart, quantity}) {
    
    //Calcular precio total de acuerdo a la cantidad
    let priceTotal = quantity * itemDetail.price 

    //Renderiza el item con sus detalles
    return (
        <Card style={{ width: '30rem' }} className="mx-auto mt-5" key={'itemDetail'+ itemDetail.id}>
            <Card.Img variant="top" src={itemDetail.image} />
            <Card.Body>
                <Card.Title>{itemDetail.name}</Card.Title>
                <Card.Text>
                    Descripción: {itemDetail.description}<br/>
                    <strong>Precio por cantidad: {priceTotal}</strong>
                </Card.Text>
                <div className="mb-3">
                    <Button size="sm" onClick={onAdd}>+</Button>
                    <Button size="sm" onClick={onSub}>-</Button>
                    <span> Cantidad: {quantity}</span><br/>
                </div>
                <Button size="sm" onClick={addCart}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
