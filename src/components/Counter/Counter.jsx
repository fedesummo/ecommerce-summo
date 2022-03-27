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

const Counter = ({ quantity, increment, decrement, stock, setIsAddedToCart }) => {
  return (
    <Container className="justify-content-center">
      <Row className="g-0">
        <Col>
          <Row className="g-0" style={{ fontSize: "1.5rem" }}>
            <Col><i className="bi bi-plus-circle" onClick={increment} /></Col>
            <Col><span>{quantity}</span></Col>
            <Col><i className="bi bi-x-circle" onClick={decrement} /></Col>
          </Row>
          <Row><span>Remaining stock: {stock}</span></Row>
        </Col>
        {
          quantity > 0 && <Col className="my-auto"> <Button variant="outline-dark" className="text-nowrap" onClick={ () => setIsAddedToCart(true) }>Add to Cart</Button> </Col>
        }
      </Row>
    </Container>
  );
};

export default Counter;
