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
            setCart(cart.splice(index,1))
            setCart([...cart, {item:it, quantity:qy}])
        }else{
            setCart([...cart, {item:it, quantity:qy}])
        }
    }

    //Función para quitar item en carrito
    function quitarCart(it) {
        let index = cart.indexOf(it)
        console.log(it)
        console.log(index)
        setCart(cart.splice(index,1))
        console.log(cart)
    }

    console.log(cart)

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

