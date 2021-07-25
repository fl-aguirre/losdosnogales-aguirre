import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {getItem} from "../getMocks";


function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState({})
    const [quantity, setQuantity] = useState(1);

    //Al resolver la promesa, devuelve el primer item de la lista y lo guarda en estado "itemDetail"
    useEffect(() => {
        getItem()
            .then((respuesta)=>{
                setItemDetail(respuesta.find( e => e.id === 1))
                console.log(respuesta)
            },error => console.log(error))
            .catch(error => console.log('Un error:' + error))
    }, [])

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

    //Función para agregar al carrito
    const addCart = () => {
        alert('Has agregado ' + quantity + ' productos!')
    }

    //Renderiza el Item Detail con sus props (estados y funciones)
    return (
        <ItemDetail
            itemDetail = {itemDetail}
            onAdd = {onAdd}
            onSub = {onSub}
            addCart = {addCart}
            quantity = {quantity}
        />
    )
}

export default ItemDetailContainer
