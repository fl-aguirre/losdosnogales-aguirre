import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import {useState} from "react";
import {Link} from 'react-router-dom'

function ItemDetail({itemDetail}) {
    
    console.log(itemDetail)

    //Estado de la cantidad
    const [quantity, setQuantity] = useState(0);

    //Estado del evento "click"
    const [event, setEvent] = useState(0)

    //Función para guardar el contador (count) en el estado de cantidad (quantity) y el evento click
    const onAdd = (qy) =>{
        setQuantity(qy)
        alert('Has agregado un producto!')
        setEvent(1)
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
                {console.log(event)}
                {event === 0 ?
                    <>
                        <ItemCount
                            stock={item.stock}
                            initial={1}
                            price={item.price}
                            onAdd = {onAdd}
                            quantity = {quantity}
                        /> 
                    </>:
                    <> 
                        <Comprar />
                    </>
                }
            </Card.Body>
        </Card>
    ));
}

export default ItemDetail
