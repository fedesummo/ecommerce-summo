import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import Counter from "./Counter"

const CounterContainer = ({data, setIsAddedToCart}) => {
  const { addItem } = useCartContext()

  const [stock, setStock] = useState(data.stock);
  const [quantity, setQuantity] = useState(0);

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