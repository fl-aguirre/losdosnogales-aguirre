import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';

const CartItem = ({cart, quitarCart, calcularPrecio}) => {
    return (
        <>
            <h2 className="subTitle">
                Carrito de compras
            </h2>
            {cart.length === 0  ?
            <h3 className="subTitle">Tu carrito está vacío!</h3>
            :
            <>
                <CardGroup>
                    <Row className="mx-auto">
                    {cart.map((itemCart)=>(
                        <Card className="card__style__cart mx-auto" key={'itemCart'+ itemCart.item.id}>
                            <Card.Img variant="top" src={itemCart.item.image} width="200" />
                            <Card.Body>
                                <Card.Title>{itemCart.item.name}</Card.Title>
                                <Card.Text>
                                    <div>Descripción: {itemCart.item.description}</div>
                                    <div className="mt-3">
                                        <strong>Precio: {itemCart.item.price}</strong><br/>
                                        <strong>Cantidad: {itemCart.quantity}</strong><br/>
                                    </div>
                                </Card.Text>
                                <Button size="sm" onClick={()=>quitarCart(itemCart)}>Quitar producto</Button>
                            </Card.Body>
                        </Card>
                    ))}
                    </Row>
                </CardGroup>
                <div className="priceContainer"><h3>Precio total: ${calcularPrecio(cart)}</h3></div>
            </>
            }
        </>
    )
}

export default CartItem
