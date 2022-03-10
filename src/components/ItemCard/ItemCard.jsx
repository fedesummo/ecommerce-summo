import { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
require("./ItemCard.css")

const ItemCard = ({productData}) => {
  console.log(productData)
  // Setting component state.
  const [stock, setStock] = useState(productData.stock);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");
  // Defining functions
  const increment = () => {
    if (quantity < productData.stock) {
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
    <Container fluid className="p-3">
      <Card>
        <Card.Header>{productData.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            <Container className="d-flex justify-content-center">
              <img
                className="product-img"
                src={`./${productData.shortName}.jpg`}
              />
            </Container>
            <Container>
              <ul style={{listStyle: "none"}}>
                <li>Operative System: {productData.specs.os}</li>
                <li>Display: {productData.specs.display}</li>
                <li>Battery: {productData.specs.battery}</li>
                <li>Memory: {productData.specs.memory}</li>
              </ul>
            </Container>
            <Container>
              <Button variant="success" onClick={increment}>
                Increment
              </Button>
              <span className="h3">Units: {quantity}</span>
              <Button variant="danger" onClick={decrement}>
                Decrement
              </Button>
              {error && <p>{error}</p>}
            </Container>
          </Card.Text>
        </Card.Body>
        <Card.Footer>Remaining stock: {stock}</Card.Footer>
      </Card>
    </Container>
  );
};

export default ItemCard;
