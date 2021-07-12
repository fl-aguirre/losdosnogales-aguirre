import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget({alerta}) {
    return (
        <button onClick={alerta}>
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
        </button>
    )
}

export default CartWidget
