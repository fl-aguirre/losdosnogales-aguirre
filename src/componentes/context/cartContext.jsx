import {createContext, useState} from "react";

export const CartContext = createContext()

export default function UseCartContext({children}) {

    const [cart, setCart] = useState([])

    //Función para guardar item en carrito
    function guardarCart(it, qy) {
        let valor = cart.find(element => element.item.id === it.id)
        console.log(valor)
        if (valor !== undefined){
            let index = cart.indexOf(valor)
            cart.splice(index,1)
            setCart([...cart, {item:it, quantity:qy}])
        }else{
            setCart([...cart, {item:it, quantity:qy}])
        }
    }

    //Función para quitar item en carrito
    function quitarCart(it) {
        console.log(it) 
        const newArray = cart.filter(i => i !== it)
        setCart(newArray)
        console.log(cart)
    }

    //Agregar métodos removeItem, clear y verificar si está en carrito
 
    return(
        <CartContext.Provider value={{
            cart, 
            guardarCart,
            quitarCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

