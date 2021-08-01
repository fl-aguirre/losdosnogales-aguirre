import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import {useState} from "react";
import {Link} from 'react-router-dom'

function ItemDetail({itemDetail}) {
    
    console.log(itemDetail)

    const [quantity, setQuantity] = useState(1);

    //Función para agregar cantidad (guarda en estado "quantity")
    const onAdd = () => {
        setQuantity(quantity + 1)
        if (quantity === itemDetail.stock) {
            setQuantity(itemDetail.stock)
            alert("No hay más stock!")
        }
    }

    //Función para quitar cantidad (guarda en estado "quantity")
    const onSub = () => {
        setQuantity(quantity - 1)
        if (quantity === 1) {
            setQuantity(1)
        }
    }

    //Guardar el evento "click" en un estado
    const [event, setEvent] = useState('none')

    //Función para capturar el evento que agrega al carrito
    const addCart = (e) => {
        alert('Has agregado un producto!')
        console.log(e.type)
        setEvent(e.type)
    }

    //Función botón "Agregar al carrito"
    const Agregar = () => {
        return(
            <Button size="sm" onClick={addCart}>Agregar al carrito</Button>
        )
    }

    //Función botón "Terminar compra"
    const Comprar = () => {
        return(
            <Button as={Link} size="sm" to="/cart">Terminar compra</Button>
        )
    }

    //Renderiza el item con sus detalles
    return itemDetail.map((item) => (
        <Card style={{ width: '30rem' }} className="mx-auto mt-5" key={'itemDetail'+ item.id}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    Descripción: {item.description}<br/>
                    <strong>Precio: {item.price}</strong>
                </Card.Text>
                {event !=='click' ?
                    <>
                        <ItemCount
                            itemDetail={item}
                            onAdd = {onAdd}
                            onSub = {onSub}
                            quantity = {quantity}
                        /> 
                        <Agregar/>
                    </>:
                    <>
                        <div> Cantidad: {quantity}</div>
                        <div className="mt-3"><strong> Precio total: {quantity * item.price}</strong></div> 
                        <Comprar />
                    </>
                }
            </Card.Body>
        </Card>
    ));
}

export default ItemDetail
