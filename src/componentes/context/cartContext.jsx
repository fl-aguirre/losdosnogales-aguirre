import {createContext, useState} from "react";

export const CartContext = createContext()

export default function UseCartContext({children}) {

    const [cart, setCart] = useState([])

    //Función para guardar item en carrito
    function guardarCart(it, qy) {
        const valor = cart.find(element => element.item.id === it.id)
        if (valor !== undefined){
            const index = cart.indexOf(valor);
            const oldQy = cart[index].quantity;
            const stockQy = cart[index].item.stock;
            if ((oldQy+qy) >= stockQy){
                cart.splice(index,1)
                setCart([...cart, {item:it, quantity:stockQy}])
            }else{
                cart.splice(index,1)
                setCart([...cart, {item:it, quantity:qy + oldQy}])
            }
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

    function clear() {
        setCart([])
    }
 
    return(
        <CartContext.Provider value={{
            cart, 
            guardarCart,
            quitarCart,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}

