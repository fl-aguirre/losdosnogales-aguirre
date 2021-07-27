import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({id, category, image, name, price})=> {

    return (
        <Card style={{ width: '18rem' }} key={'item'+ id} className="mx-auto">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Precio AR$: {price}</strong>
                </Card.Text>
                <Button as={Link} size="sm" to={"/item/"+ id}>Seleccionar</Button>
            </Card.Body>
        </Card>
    )
}

export default Item