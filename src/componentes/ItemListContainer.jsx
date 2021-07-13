import { useState, useEffect } from 'react';
import Items from "./Items";
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from "./ItemCount";

function ItemListContainer() {
    const arrayProductos = ['Producto 1', 'Producto 2', 'Producto 3']

    const [stock, setStock] = useState(10)
    const [cantidad, setCantidad] = useState(0)

    const onAdd = () => {
        setCantidad(cantidad + 1)
        if (cantidad == 10) {
            setCantidad(stock)
            alert("No hay más stock!")
        }
    }

    const onSub = () => {
        setCantidad(cantidad - 1)
        if (cantidad == 0) {
            setCantidad(0)
        }
    }

    const addCart = () => {
        if (cantidad === 0){
            alert('No has agregado productos!')
        }else {
            alert('Has agregado ' + cantidad + ' productos!')
        }
    }

    return (
        <CardGroup>
            <ItemCount 
                cantidad = {cantidad}
                onAdd = {onAdd}
                onSub = {onSub}
                addCart = {addCart}
            />
            <Items 
                productos={arrayProductos}
                greeting="La mejor garantía"
            />
        </CardGroup>
    )

}

export default ItemListContainer
