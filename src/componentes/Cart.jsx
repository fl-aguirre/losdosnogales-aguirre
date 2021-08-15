import {useState, useContext} from "react";
import {Link} from 'react-router-dom';
import {CartContext} from './context/CartContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { getFirestore } from "./servicios/firebaseService";
import firebase from 'firebase'
import Badge from 'react-bootstrap/Badge';


function Cart() {

    const {cart, quitarCart, clear} = useContext(CartContext)

    //Función para calcular el precio total
    function calcularPrecio(cart) {
        let precioTotal = 0;
        for (let itemCart of cart) {
            precioTotal = precioTotal + (itemCart.item.price*itemCart.quantity);
        }
        return precioTotal
    }

    //Estado para datos del comprador
    const [buyer, setBuyer] = useState(initialState)

    //Estado para confirmación de compra
    const [purchase, setPurchase] = useState(false)

    //Estado para guardar id de la compra
    const [id, setId] = useState('')

    //Tomar los nombres, precios, ids y cantidades de los items del carrito
    const returnItems = (cart) => {
        const items = []
        cart.forEach(element => {
            items.push({id: element.item.id, title: element.item.name, price: element.item.price, stock: element.item.stock, quantity: element.quantity})
        })
        return items
    }
    
    //Crea la variable con datos de comprador, items y precio total para mandar a base de datos
    const order = {
        buyer, 
        items: returnItems(cart),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        precioTotal: calcularPrecio(cart)
    }

    //Manejador del cambio en formulario. Setea el estado del comprador
    const handlerChange = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name]: event.target.value
        })
    }

    //Manejador del submit que manda orden a la base de datos y actualiza el stock
    const handlerSubmit = (event) => {
        event.preventDefault()
        const db = getFirestore()
        order.items.forEach(elemento => {
            db.collection('items').doc(elemento.id).update({
                stock: elemento.stock - elemento.quantity
            })
        })
        db.collection('order').add(order)

        // db.collection('order').add(order) //Agregar una orden
        // db.collection('order').doc('h0sdf1HKhUcMe0JJ08jw').update(order) //Actualizar todo
        // db.collection('order').doc('h0sdf1HKhUcMe0JJ08jw').update({ //Actualizar sólo items con un array vacío
        //     item: []
        // })
        .then(respuesta=> {
            console.log(respuesta)
            setId(respuesta.id) //Devuelve el ID de la compra al user
            })
        .then(setPurchase(true))
        .then(clear())
        .catch(error => console.log(error))
        // .finally(()=>)

        // const batch = db.batch()     //Método para anidar varias consultas al firestore
        // batch.update(docPrimero, {field:'prueba'})
        // batch.set(docSegundo, {field:'nuevaPrueba'})
        // batch.commit().then(resp => resp)
    }

    console.log(order)

    return (
        <div>{purchase ? 
            <>
                <h2 className="text-center">
                Su compra se ha realizado exitosamente!
                </h2>
                <h3 className="text-center mt-5">ID de su compra: {id}</h3>
            </>
            :
            <>
                <h2 className="text-center">
                    Carrito de compras
                </h2>
                {cart.length === 0  ?
                <div><h3 className="text-center mt-5">Tu carrito está vacío</h3>
                    <Button size="sm" as={Link} to="/">Volver al home</Button>
                </div>:
                <>
                    <CardGroup style={{ width:'30rem'}} className="mx-auto">
                        {cart.map((itemCart)=>(
                            <Card style={{ width:'15rem'}} className="mx-auto mt-5" key={'itemCart'+ itemCart.item.id}>
                                <Card.Img variant="top" src={itemCart.item.image} width="200" />
                                <Card.Body>
                                    <Card.Title>{itemCart.item.name}</Card.Title>
                                    <Card.Text>
                                        Descripción: {itemCart.item.description}<br/>
                                        <strong>Precio: {itemCart.item.price}</strong><br/>
                                        <strong>Cantidad: {itemCart.quantity}</strong><br/>
                                    </Card.Text>
                                    <Button size="sm" onClick={()=>quitarCart(itemCart)}>Quitar producto</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardGroup>

                    <div><strong>Precio total: {calcularPrecio(cart)}</strong></div>
                    <Button size="sm" onClick={(clear)}>Limpiar carrito</Button>

                    <form
                    onSubmit={handlerSubmit} className="mt-5 text-center"
                    >
                        <input type="texto" placeholder="Nombre" name="name" value={buyer.name} onChange={handlerChange}></input><br/>
                        <input type="texto" placeholder="Teléfono" name="phone" value={buyer.phone} onChange={handlerChange}></input><br/>
                        <input type="email" placeholder="Email" name="email" value={buyer.email} onChange={handlerChange}></input><br/>
                        <input type="email" placeholder="Confirmar email" name="validateEmail" value={buyer.validateEmail} onChange={handlerChange}></input><br/>
                        {buyer.email === buyer.validateEmail && buyer.email !== "" ?
                        <>
                            <Button type="submit">Enviar</Button>
                        </>
                        :
                        <Badge>Emails deben coincidir</Badge>}
                    </form>
                </>
                }
            </>
        }</div>
    )
}

export default Cart

//Estado inicial del comprador
const initialState = {
    name:'',
    phone:'',
    email:'',
    validateEmail:''
}
