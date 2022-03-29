// Importing context.
import { useCartContext } from "../../context/CartContext"
// Importing project components.
import Cart from "./Cart"

const CartContainer = () => {
  // Importing functions and variables from cart context.
  const { clear, isInCart, removeItem, cart } = useCartContext()
  // Testing "isInCart" function.
  console.log("Is phone on cart? -> ", isInCart(1) )
  return (
    <Cart clear={clear} cart={cart}  removeItem={removeItem}/>
  )
}

export default CartContainer