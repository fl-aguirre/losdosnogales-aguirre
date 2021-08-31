import {createContext, useState, useEffect} from "react";

export const CartContext = createContext()

export default function UseCartContext({children}) {

    //Estados para guardar items del carrito
    const [cart, setCart] = useState([])

    //Guardar en Local Storage
    const saveLocal = (clave,valor) => { 
        localStorage.setItem(clave,JSON.stringify(valor));
    }

    //Cargar datos al carrito del LocalStorage
    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem("Carrito"))
        cart.length === 0 && carrito && setCart(carrito)
    },[cart.length])

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
                setCart([...cart, {item:it, quantity:qy + oldQy}]);
            }
        }else{
            setCart([...cart, {item:it, quantity:qy}])
        }
    }

    //Función para quitar item en carrito
    function quitarCart(it) {
        const newArray = cart.filter(i => i !== it)
        setCart(newArray)
        saveLocal("Carrito",newArray)
    }

    //Función para limpiar carrito
    function clear() {
        setCart([])
    }

    //Función para calcular cantidad
    function calcularCantidad(cart) {
        let cantidadTotal = 0;
        for (let itemCart of cart) {
            cantidadTotal = cantidadTotal + itemCart.quantity;
        }
        return cantidadTotal
    }

    //Función para calcular el precio total
    function calcularPrecio(cart) {
        let precioTotal = 0;
        for (let itemCart of cart) {
            precioTotal = precioTotal + (itemCart.item.price*itemCart.quantity);
        }
        return precioTotal
    }
 
    return(
        <CartContext.Provider value={{
            cart,
            guardarCart,
            saveLocal,
            quitarCart,
            clear,
            calcularCantidad,
            calcularPrecio
        }}>
            {children}
        </CartContext.Provider>
    )
}

