// Importing react hooks.
import { useState } from "react";
// Importing bootstrap components.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// const Counter = ({ initialStock }) => {
//   // Setting component state.
//   const [stock, setStock] = useState(initialStock);
//   const [quantity, setQuantity] = useState(0);
//   // Defining functions
//   const increment = () => {
//     if (quantity < initialStock) {
//       setQuantity(quantity + 1);
//       setStock(stock - 1);
//     }
//   };
//   const decrement = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//       setStock(stock + 1);
//     }
//   };
//   return (
//     <>
//     <Container>
//       <Button variant="success" onClick={increment}>
//         +
//       </Button>
//       <span className="h3">Units: {quantity}</span>
//       <Button variant="danger" onClick={decrement}>
//         -
//       </Button>
//     </Container>
//     <Container>
//       <p>Remaining stock: {stock}</p>
//     </Container>
//     </>
//   );
// };

// export default Counter;

const Counter = ({ quantity, increment, decrement, stock }) => {
  return (
    <Container className="d-flex align-items-center">
      <Container>
        <Container
          className="d-flex text-center gap-3 justify-content-center"
          style={{ fontSize: "1.5rem" }}
        >
          <i className="bi bi-plus-circle" onClick={increment} />
          <span>{quantity}</span>
          <i className="bi bi-x-circle" onClick={decrement} />
        </Container>
        <Container>
          <span>Remaining stock: {stock}</span>
        </Container>
      </Container>
      {quantity > 0 && <Link to="/cart" className="text-nowrap btn btn-outline-dark">Go to Cart</Link>}
    </Container>
  );
};

export default Counter;
