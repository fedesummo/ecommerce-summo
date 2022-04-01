import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    useEffect(
        () => console.log("Cart: ", cart),
        [cart]
    )

    // Add an item to cart.
    const addItem = (item, quantity) => {
        // Filtering the cart to know if the product already exist.
        const filter = cart.filter( element => element.item.id == item.id )[0]
        if ( filter ) {
            // If there's a coincidence, add the quantity...
            filter.quantity += quantity
            // ... and replace the original cart.
            setCart( [...cart] )
        } else {
            // If there´s not a coincidence, add the new product to the cart.
            setCart( [...cart, {item: item, quantity: quantity}] )
        }
    }

    // Remove an item from cart.
    const removeItem = id => {
        // Getting the index of the element.
        const index = cart.indexOf( cart.filter( element => element.item.id == id )[0] )
        cart.splice(index, 1)
        setCart([...cart])
    }

    // Clear cart.
    const clear = () => setCart([])

    // Check if an item is in cart.
    const isInCart = id => cart.filter( element => element.item.id == id ).length > 0 ? true : false

    const calculateTotalPrice = () => {
        let totalPrice = 0
        cart.map(
            element => totalPrice += element.quantity * parseFloat(element.item.price)
        )
        return totalPrice
    }

    const totalItems = () => {
        let totalItems = 0
        cart.map(
            element => totalItems += element.quantity
        )
        return totalItems
    }

    return <CartContext.Provider value={{cart, addItem, clear, isInCart, removeItem, calculateTotalPrice, totalItems}}> {children} </CartContext.Provider>
}