import {useState} from "react";
import Button from 'react-bootstrap/Button';

function ItemCount({stock, initial, price, onAdd, item, cart}) {

    const [ count, setCount ] = useState( initial ) //Estado del contador (suma y resta)
    const [ alerta, setAlerta ] = useState(false) //Estado para la alerta de stock

    //Función para sumar (guarda en count)
    const sumar = () => {
        setCount(count + 1)
        const valor = cart.find(element => element.item.id === item.id)
        if (valor !== undefined){
            const index = cart.indexOf(valor);
            const qy = cart[index].quantity;
            if ((count + qy) >= stock){ //Se pone >= porque el valor initial es 1 y me rompe el contador si se completa el stock
                setCount(count)
                setAlerta(true)
            }
        }else if (count === stock){
            setCount(count)
            setAlerta(true)
        }
    }

    //Función para restar (guarda en count)
    const restar = () => {
        setAlerta(false)
        if (count > initial) {
            setCount(count - 1)  
        }
    }

    return (
        <div className="mb-3">
            <Button size="sm" onClick={sumar}>+</Button>
            <Button size="sm" onClick={restar}>-</Button>
            {stock === 0 ? 
            <div>No hay stock</div>
            :
            <>
                <div> Cantidad: {count}</div>
                {alerta ? <div>No hay stock</div>:<></>}
                <div className="mt-3">
                    <strong> Precio total: {count * price}</strong>
                </div>
                <div className="text-center mt-3">
                    <Button  size="sm" onClick={()=> onAdd(count, item)}>Seleccionar cantidad</Button>
                </div>
            </>
            }
        </div>
    )
}

export default ItemCount
