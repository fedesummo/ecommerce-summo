// Importing react hooks.
import { useState } from "react";
// Importing project component.
import Counter from "./Counter"

const CounterContainer = ({initialStock, setIsAddedToCart}) => {
  // Setting component state.
  const [stock, setStock] = useState(initialStock);
  const [quantity, setQuantity] = useState(0);
  // Defining functions
  const increment = () => {
    if (quantity < initialStock) {
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
  return (
    <Counter stock={stock} increment={increment} decrement={decrement} quantity={quantity} setIsAddedToCart={setIsAddedToCart}/>
  )
}

export default CounterContainer