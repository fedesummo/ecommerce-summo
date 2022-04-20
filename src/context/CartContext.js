import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        const filter = cart.filter( element => element.item.id == item.id )[0]
        if ( filter ) {
            filter.quantity += quantity
            setCart( [...cart] )
        } else {
            setCart( [...cart, {item: item, quantity: quantity}] )
        }
    }

    const removeItem = id => {
        const index = cart.indexOf( cart.filter( element => element.item.id == id )[0] )
        cart.splice(index, 1)
        setCart([...cart])
    }

    const clear = () => setCart([])

    const totalPrice = () => cart.reduce(
        (acum, element) => acum + (element.quantity * element.item.price),
        0
    )

    const totalItems = () => cart.reduce(
        (acum, element) => acum + element.quantity,
        0
    )

    return <CartContext.Provider value={{cart, addItem, clear, removeItem, totalPrice, totalItems}}> {children} </CartContext.Provider>
}