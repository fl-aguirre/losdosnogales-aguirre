import {useState} from "react";
import Button from 'react-bootstrap/Button';

function ItemCount({stock, initial, price, onAdd}) {

    //Estado del contador (suma y resta)
    const [ count, setCount ] = useState( initial )
    
    //Función para sumar (guarda en count)
    const sumar = () => {
        setCount(count + 1)
        if (count === stock) {
            setCount(stock)
            alert("No hay más stock!")
        }
    }

    //Función para restar (guarda en count)
    const restar = () => {
        setCount(count - 1)
        if (count === 1) {
            setCount(1)  
        }
    }

    return (
        <div className="mb-3">
            <Button size="sm" onClick={sumar}>+</Button>
            <Button size="sm" onClick={restar}>-</Button>
            <span> Cantidad: {count}</span><br/>
            <div className="mt-3"><strong> Precio total: {count * price}</strong></div>
            <Button className="mt-3" size="sm" onClick={()=> onAdd(count)}>Seleccionar cantidad</Button>
        </div>
    )
}

export default ItemCount
