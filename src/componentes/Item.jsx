import {memo} from "react";
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = memo(({id, image, name, price})=> {

    return (
        <Card className="mx-auto card__style__products">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <span>Precio ${price}</span>
                </Card.Text>
                <Button as={Link} size="sm" to={"/item/"+ id}>Seleccionar</Button>
            </Card.Body>
        </Card>
    )
}, (anterior,posterior)=> anterior.id === posterior.id) // Condición de la función memo. Solo es ilustrativa. Evita que se re-renderice todo ante cambios de estado

export default Item