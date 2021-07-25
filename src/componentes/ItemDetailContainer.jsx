import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {getItem} from "../getMocks";


function ItemDetailContainer() {

    const [itemDetail, setItemDetail] = useState({})

    //Al resolver la promesa, devuelve el primer item de la lista y lo guarda en estado "itemDetail"
    useEffect(() => {
        getItem()
            .then((respuesta)=>{
                setItemDetail(respuesta.find( e => e.id === 1))
                console.log(respuesta)
            },error => console.log(error))
            .catch(error => console.log('Un error:' + error))
    }, [])

    //Función para agregar al carrito
    const addCart = () => {
        alert('Has agregado un producto!')
    }

    //Renderiza el Item Detail con sus props (estados y funciones)
    console.log(itemDetail)
    if (Object.keys(itemDetail).length === 0){
        return null
    }else {
        return (
            <ItemDetail
                itemDetail = {itemDetail}
                addCart = {addCart}
            />
        )
    }
}

export default ItemDetailContainer
