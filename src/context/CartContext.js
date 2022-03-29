import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    useEffect(
        () => console.log("Cart: ", cart),
        [cart]
    )

    const addItem = (item, quantity) => {
        // Setting a copy of the cart to modify the values.
        const cartCopy = cart
        // Filtering the cart to know if the product already exist.
        const filter = cartCopy.filter( element => element.item.id == item.id )[0]
        if ( filter ) {
            // If there's a coincidence, add the quantity...
            filter.quantity += quantity
            // ... and replace the original cart.
            setCart(cartCopy)
            console.log("Cart: " , cart)
        } else {
            // If there´s not a coincidence, add the new product to the cart.
            setCart( [...cart, {item: item, quantity: quantity}] )
        }
    }

    const removeItem = id => {
        // Setting a copy of the cart to modify the values.
        const cartCopy = cart
        // Getting the index of the element.
        const index = cart.indexOf( cart.filter( element => element.item.id == id )[0] )
        cartCopy.splice(index, 1)
        setCart(cartCopy)
        console.log(cart)
    }

    // Clear cart.
    const clear = () => setCart([])

    const isInCart = id => cart.filter( element => element.item.id == id ).length > 0 ? true : false

    return <CartContext.Provider value={{cart, addItem, clear, isInCart, removeItem}}> {children} </CartContext.Provider>
}