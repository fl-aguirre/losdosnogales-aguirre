import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import {useState, useContext} from "react";
import {Link} from 'react-router-dom'
import {CartContext} from './context/CartContext';

function ItemDetail({itemDetail}) {

    //Estado de la cantidad
    const [quantity, setQuantity] = useState(0);

    //Usar estado y función del contexto
    const {guardarCart} = useContext(CartContext)

    //Función para guardar el contador (count) en el estado de cantidad (quantity) y el evento click
    const onAdd = (qy, item) =>{
        alert("Has agregado un producto!")
        guardarCart(item, qy)
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
                            item = {item}
                        /> 
                    </>:
                    <>  <span> Cantidad: {quantity}</span><br/>
                        <div><strong> Precio total: {quantity * item.price}</strong></div>
                        <Button key={'btnDetail'+ item.id} className="mt-3" as={Link} size="sm" to="/cart" >Terminar compra</Button>
                    </>
                }
            </Card.Body>
        </Card>
    ));
}

export default ItemDetail
