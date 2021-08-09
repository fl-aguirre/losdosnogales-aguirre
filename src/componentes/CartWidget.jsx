import {useContext} from "react";
import {Link} from 'react-router-dom';
import {CartContext} from './context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


function CartWidget() {

    const {cart} = useContext(CartContext)

    //Función para calcular la cantidad total de items
    let cantidadTotal = 0;
    function calcularCantidad(cart) {
        for (let itemCart of cart) {
            cantidadTotal = cantidadTotal + itemCart.quantity;
        }
    }

    return (
        <Button as={Link} to="/cart">
            {calcularCantidad(cart)}
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/><Badge>{cantidadTotal}</Badge>
        </Button>
    )
}

export default CartWidget
