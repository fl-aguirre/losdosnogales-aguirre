import {useState} from "react";
import Button from 'react-bootstrap/Button';

function ItemCount({stock, initial, price, onAdd, quantity, event}) {

    //Estado del contador (suma y resta)
    const [ count, setCount ] = useState( initial )
    
    //Función para sumar (guarda en count)
    const Sumar = () => {
        setCount(count + 1)
        if (count === stock) {
            setCount(stock)
            alert("No hay más stock!")
        }
    }

    //Función para restar (guarda en count)
    const Restar = () => {
        setCount(count - 1)
        if (count === 1) {
            setCount(1)  
        }
    }

    return (
        <div className="mb-3">
            <Button size="sm" onClick={Sumar}>+</Button>
            <Button size="sm" onClick={Restar}>-</Button>
            <span> Cantidad: {count}</span><br/>
            <div className="mt-3"><strong> Precio total: {count * price}</strong></div>
            <Button className="mt-3" size="sm" onClick={()=> onAdd(count)}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
