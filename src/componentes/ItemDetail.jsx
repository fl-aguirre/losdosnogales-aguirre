import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import {CartContext} from './context/CartContext';

function ItemDetail({item}) {

    //Estado de la cantidad
    const [quantity, setQuantity] = useState(0);

    //Usar estado y función del contexto
    const {cart, saveLocal, guardarCart} = useContext(CartContext)

    //Función para guardar el contador (count) en el estado de cantidad (quantity) y el evento click
    const onAdd = (qy, item) =>{
        guardarCart(item, qy)
        setQuantity(qy)
    }

    //Guardar carrito en Local Storage
    saveLocal("Carrito", cart);

    //Renderiza el item con sus detalles
    return (
        <>  
            {quantity !== 0 ? 
                <h2 className="subTitle">Has agregado este producto!</h2>
            :
                <></>
            }
            <Card className="mx-auto card__style__detail" key={'itemDetail'+ item.id}>
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
                                cart = {cart}
                            /> 
                        </>:
                        <>  <div className="text-center"> Cantidad: {quantity}</div>
                            <div className="mb-3 text-center">
                                <strong> Precio total: {quantity * item.price}</strong>
                            </div>
                            <div className="m-3">
                                <Button key={'btnDetail'+ item.id} as={Link} size="sm" to="/cart" >Terminar compra</Button>
                                <Button key={'btnHome'+ item.id} as={Link} size="sm" to="/" >Ver más productos</Button>
                            </div>
                        </>
                    }
                </Card.Body>
            </Card>
        </>
    );
}

export default ItemDetail
