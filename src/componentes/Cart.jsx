import {useState, useContext} from "react";
import {CartContext} from './context/CartContext';
import { getFirestore } from "./servicios/firebaseService";
import firebase from 'firebase';
import CartItem from "./CartItem";
import Button from 'react-bootstrap/Button';
import CartForm from './CartForm';
import Checkout from './Checkout';
import {Link} from 'react-router-dom';

function Cart() {

    const {cart, quitarCart, clear, calcularPrecio} = useContext(CartContext)

    console.log(cart)

    //Estados
    const [buyer, setBuyer] = useState(initialState) //Datos del comprador
    const [purchase, setPurchase] = useState(false) //Confirmación de compra
    const [id, setId] = useState('') //Guardar id de compra

    //Control del formulario (modal)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Tomar los nombres, precios, ids y cantidades de los items del carrito
    const returnItems = (cart) => {
        const items = []
        cart.forEach(element => {
            items.push(
            {
                id: element.item.id, 
                title: element.item.name,
                description: element.item.description,
                image: element.item.image, 
                price: element.item.price, 
                stock: element.item.stock, 
                quantity: element.quantity, 
            })
        })
        return items
    }
    
    //Crea la variable con datos de comprador, items y precio total para mandar a base de datos
    const order = {
        buyer, 
        items: returnItems(cart),
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        precioTotal: calcularPrecio(cart),
        confirm: purchase,
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

        .then(respuesta=> {
            console.log(respuesta)
            setId(respuesta.id) //Devuelve el ID de la compra al user    
        })
        .then(setPurchase(true))
        .catch(error => console.log(error))
    }

    //Limpiar carrito y local storage
    const cleanCart = () => {
        localStorage.clear();
        clear();
    }

    return (
        <div>{purchase ?
            <Checkout 
                id={id}
                order={order}
                cleanCart={cleanCart}
            /> 
            :
            <>
                <CartItem
                    cart={cart}
                    quitarCart={quitarCart}
                    calcularPrecio={calcularPrecio}
                />
                <div className="text-center">
                    <Button size="lg" onClick={(cleanCart)}>Limpiar carrito</Button>
                    {cart.length !== 0 ?
                    <Button size="lg" variant="primary" onClick={handleShow}>Realizar compra</Button>
                    :
                    <Button size="lg" as={Link} to="/">Volver al home</Button>}
                </div>
                <CartForm
                    handlerChange={handlerChange}
                    handlerSubmit={handlerSubmit}
                    buyer={buyer}
                    show={show}
                    handleClose={handleClose}

                />
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
