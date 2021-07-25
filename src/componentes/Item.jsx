import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({id, image, name, price})=> {

    return (
        <Card style={{ width: '18rem' }} key={'item'+ id}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Precio AR$: {price}</strong>
                </Card.Text>
                <Button size="sm">Seleccionar</Button>
            </Card.Body>
        </Card>
    )
}

export default Item