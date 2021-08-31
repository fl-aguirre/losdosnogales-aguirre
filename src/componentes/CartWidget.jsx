import {useContext} from "react";
import {Link} from 'react-router-dom';
import {CartContext} from './context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


function CartWidget() {

    const {cart, calcularCantidad} = useContext(CartContext)

    return (
        <Button as={Link} to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
            <Badge>{calcularCantidad(cart)}</Badge>
        </Button>
    )
}

export default CartWidget
