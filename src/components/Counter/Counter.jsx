// Importing bootstrap components.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Counter = ({ quantity, increment, decrement, stock, onAdd }) => {
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
            quantity > 0 &&
              <Col className="my-auto">
                <Button variant="outline-dark" className="text-nowrap" onClick={onAdd}>
                  Add to Cart
                </Button>
              </Col>
          }
      </Row>
    </Container>
  );
};

export default Counter;
