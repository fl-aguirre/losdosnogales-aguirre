import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

function CartWidget() {
    return (
        <Button as={Link} to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
        </Button>
    )
}

export default CartWidget
