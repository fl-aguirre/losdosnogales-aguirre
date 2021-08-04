import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import {useState, useContext} from "react";
import {Link} from 'react-router-dom'
import {CartContext} from './context/CartContext';

function ItemDetail({itemDetail}) {
    
    console.log(itemDetail)

    //Estado de la cantidad
    const [quantity, setQuantity] = useState(0);

    //Usar estado y función del contexto
    const {cart, guardarCart} = useContext(CartContext)

    //Función para guardar el contador (count) en el estado de cantidad (quantity) y el evento click
    const onAdd = (qy, item) =>{
        setQuantity(qy)
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
                {quantity === 0 ?
                    <>
                        <ItemCount
                            stock={item.stock}
                            initial={1}
                            price={item.price}
                            onAdd = {onAdd}
                        /> 
                    </>:
                    <>  <span> Cantidad: {quantity}</span><br/>
                        <div><strong> Precio total: {quantity * item.price}</strong></div>
                        <Button className="mt-3" as={Link} size="sm" to="/cart" onClick={()=>guardarCart(item, quantity)}>Terminar compra</Button>
                    </>
                }
            </Card.Body>
        </Card>
    ));
}

export default ItemDetail
