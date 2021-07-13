import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCount = ({cantidad, onAdd, onSub, addCart}) => {

    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>Producto</Card.Title>
                <Card.Text>
                    Producto
                </Card.Text>
                <Button size="sm" onClick={onAdd}>+</Button>
                <Button size="sm" onClick={onSub}>-</Button>

                <span> Cantidad: {cantidad}</span><br/>

                <Button size="sm" onClick={addCart}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemCount
