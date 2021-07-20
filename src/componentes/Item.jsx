import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({name, description, price, initial, stock})=> {

    const [cantidad, setCantidad] = useState(initial);

    const onAdd = () => {
        setCantidad(cantidad + 1)
        if (cantidad === stock) {
            setCantidad(stock)
            alert("No hay más stock!")
        }
    }

    const onSub = () => {
        setCantidad(cantidad - 1)
        if (cantidad === 1) {
            setCantidad(1)
        }
    }

    const addCart = () => {
        alert('Has agregado ' + cantidad + ' productos!')
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}<br/>
                    {price}
                </Card.Text>
                <Button size="sm" onClick={onAdd}>+</Button>
                <Button size="sm" onClick={onSub}>-</Button>

                <span> Cantidad: {cantidad}</span><br/>

                <Button size="sm" onClick={addCart}>Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}

export default Item