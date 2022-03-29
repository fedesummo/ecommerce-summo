// Importing react hooks.
import { useState } from "react";
// Importing context.
import { useCartContext } from "../../context/CartContext";
// Importing project component.
import Counter from "./Counter"

const CounterContainer = ({data, setIsAddedToCart}) => {
  // Extracting functions from context.
  const { addItem } = useCartContext()
  // Setting component state.
  const [stock, setStock] = useState(data.stock);
  const [quantity, setQuantity] = useState(0);
  // Defining functions
  const increment = () => {
    if (quantity < data.stock) {
      setQuantity(quantity + 1);
      setStock(stock - 1);
    }
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setStock(stock + 1);
    }
  };
  const onAdd = () => {
    setIsAddedToCart(true)
    addItem(data, quantity)
  }
  return (
    <Counter stock={stock} increment={increment} decrement={decrement} quantity={quantity} onAdd={onAdd}/>
  )
}

export default CounterContainer