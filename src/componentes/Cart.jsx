import {useContext, useEffect, useState} from "react";
import {CartContext} from './context/CartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom'


function Cart() {

    const {cart, quitarCart} = useContext(CartContext)
    console.log(cart)

    return (
        <div>
            <h2 className="text-center">
                Carrito de compras
            </h2>
            <CardGroup style={{ width:'50rem'}} className="mx-auto">
                {cart.map((itemCart)=>(
                    <Card style={{ width:'15rem'}} className="mx-auto mt-5" key={'itemCart'+ itemCart.item.id}>
                        <Card.Img variant="top" src={itemCart.item.image} />
                        <Card.Body>
                            <Card.Title>{itemCart.item.name}</Card.Title>
                            <Card.Text>
                                Descripción: {itemCart.item.description}<br/>
                                <strong>Precio: {itemCart.item.price}</strong><br/>
                                <strong>Cantidad: {itemCart.quantity}</strong><br/>
                            </Card.Text>
                            <Button size="sm" onClick={()=>quitarCart(itemCart)}>Quitar producto</Button>
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </div>
    )
}

export default Cart
