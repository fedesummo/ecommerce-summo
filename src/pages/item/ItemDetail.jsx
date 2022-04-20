import CounterContainer from "../../components/Counter/CounterContainer";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemDetail = ({ data, isAddedToCart, setIsAddedToCart }) => {
  return (
    <Card className="my-3 mx-auto" style={{ textAlign: "center", maxWidth: "70vw" }}>
      <Card.Header>{data.name}</Card.Header>
      <Row sm={1} md={2}>
        <Col>
          <Card.Img src={data.imgUrl} />
        </Col>
        <Col className="min-h-100">
          <Card.Body className="h-100 d-flex flex-column justify-content-center gap-5">
            <Row>
              <Card.Title><i className="bi bi-gear"></i> Specs</Card.Title>
              <Card.Text className="mb-0"><i>Operative System:</i> {data.specs.os}</Card.Text>
              <Card.Text className="mb-0"><i>Display:</i> {data.specs.display}</Card.Text>
              <Card.Text className="mb-0"><i>Battery:</i> {data.specs.battery}</Card.Text>
              <Card.Text><i>Memory:</i> {data.specs.memory}</Card.Text>
            </Row>
            <Row>
              <Card.Title><i className="bi bi-truck"></i> Shop now and get free shipping!</Card.Title>
              <Card.Title><i className="bi bi-credit-card"></i> We accept all credit and debit cards!</Card.Title>
            </Row>
            <Row>
              {isAddedToCart
                ? <Container className="d-flex justify-content-evenly">
                    <Link to="/" className="btn btn-outline-dark mt-2 text-nowrap">Back to Store</Link>
                    <Link to="/cart" className="btn btn-outline-dark mt-2 text-nowrap">Go to Cart</Link>
                  </Container>
                : <CounterContainer data={data} isAddedToCart={isAddedToCart} setIsAddedToCart={setIsAddedToCart}/>
              }
            </Row>
          </Card.Body>
        </Col>
      </Row>
      <Card.Footer>Price: ${data.price}</Card.Footer>
    </Card>
  );
};

export default ItemDetail;
