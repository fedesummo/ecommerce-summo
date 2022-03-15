// Importing react hooks.
import { useState } from "react";
// Importing bootstrap components.
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Counter = ({ initialStock }) => {
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
    <>
    <Container>
      <Button variant="success" onClick={increment}>
        +
      </Button>
      <span className="h3">Units: {quantity}</span>
      <Button variant="danger" onClick={decrement}>
        -
      </Button>
    </Container>
    <Container>
      <p>Remaining stock: {stock}</p>
    </Container>
    </>
  );
};

export default Counter;
