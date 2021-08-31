import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const Brief = ({order, cleanCart}) => {
    return (
        <>
            <CardGroup>
                <Row className="mx-auto">
                {order.items.map((itemCart)=>(
                <Card className="card__style__purchase" key={'itemCheckout'+ itemCart.id}>
                    <Card.Img variant="top" src={itemCart.image}/>
                    <Card.Body>
                        <Card.Title>{itemCart.title}</Card.Title>
                        <Card.Text>
                            <span>Precio: {itemCart.price}</span>
                            <span>Cantidad: {itemCart.quantity}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                ))}
                </Row>
            </CardGroup>
            <div className="priceContainer"><h3>Precio total: {order.precioTotal}</h3></div>
            <div className="text-center">
                <Button as={Link} onClick={(cleanCart)} size="lg" to="/">Confirmar</Button>
            </div>
        </>
    )
}

export default Brief
