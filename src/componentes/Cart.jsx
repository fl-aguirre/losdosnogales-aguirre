import {useContext} from "react";
import {Link} from 'react-router-dom';
import {CartContext} from './context/CartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';


function Cart() {

    const {cart, quitarCart, clear} = useContext(CartContext)
    console.log(cart)

    //Función para calcular el precio total
    let precioTotal = 0;
    function calcularPrecio(cart) {
        for (let itemCart of cart) {
            precioTotal = precioTotal + (itemCart.item.price*itemCart.quantity);
        }
    }

    return (
        <div>
            <h2 className="text-center">
                Carrito de compras
            </h2>
            {cart.length === 0 ?
            <div><h3 className="text-center mt-5">Tu carrito está vacío</h3>
                <Button size="sm" as={Link} to="/">Volver al home</Button>
            </div>:
            <>
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

                {calcularPrecio(cart)}
                <div><strong>Precio total: {precioTotal}</strong></div>
            </>
            }
            <Button size="sm" onClick={(clear)}>Limpiar carrito</Button>
        </div>
    )
}

export default Cart
