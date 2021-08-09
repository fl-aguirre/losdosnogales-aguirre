import {useState} from "react";
import Button from 'react-bootstrap/Button';

function ItemCount({stock, initial, price, onAdd, item, cart}) {

    //Estado del contador (suma y resta)
    const [ count, setCount ] = useState( initial )

    //Función para sumar (guarda en count)
    const sumar = () => {
        setCount(count + 1)
        const valor = cart.find(element => element.item.id === item.id)
        if (valor !== undefined){
            const index = cart.indexOf(valor);
            const qy = cart[index].quantity;
            if ((count + qy) >= stock){ //Se pone >= porque el valor initial es 1 y me rompe el contador si se completa el stock
                setCount(count)
                alert("No hay más stock!")
            }
        }else if (count === stock){
            setCount(count)
            alert("No hay más stock!")
        }
    }

    //Función para restar (guarda en count)
    const restar = () => {
        if (count > initial) {
            setCount(count - 1)  
        }
    }

    return (
        <div className="mb-3">
            <Button size="sm" onClick={sumar}>+</Button>
            <Button size="sm" onClick={restar}>-</Button>
            <span> Cantidad: {count}</span><br/>
            <div className="mt-3"><strong> Precio total: {count * price}</strong></div>
            <Button className="mt-3" size="sm" onClick={()=> onAdd(count, item)}>Seleccionar cantidad</Button>
        </div>
    )
}

export default ItemCount
