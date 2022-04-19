// Importing bootstrap components.
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CounterContainer from "../../components/Counter/CounterContainer";
import { Link } from "react-router-dom";

const ItemDetail = ({ data, isAddedToCart, setIsAddedToCart }) => {
  console.log(data)
  return (
    <Card className="my-3 mx-auto" style={{ textAlign: "center", maxWidth: "70vw" }}>
      <Card.Header>{data.name}</Card.Header>
      <Row sm={1} md={2}>
        <Col>
          <Card.Img src={data.imgUrl} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title><i className="bi bi-gear"></i> Specs</Card.Title>
            <Card.Text className="mb-0"><i>Operative System:</i> {data.specs.os}</Card.Text>
            <Card.Text className="mb-0"><i>Display:</i> {data.specs.display}</Card.Text>
            <Card.Text className="mb-0"><i>Battery:</i> {data.specs.battery}</Card.Text>
            <Card.Text><i>Memory:</i> {data.specs.memory}</Card.Text>
            <Card.Title><i className="bi bi-truck"></i> Shop now and get free shipping!</Card.Title>
            <Card.Title><i className="bi bi-credit-card"></i> We accept all credit and debit cards!</Card.Title>
            {isAddedToCart
              ? <Link to="/cart" className="btn btn-outline-dark mt-2">Go to Cart</Link>
              : <CounterContainer data={data} isAddedToCart={isAddedToCart} setIsAddedToCart={setIsAddedToCart}/>
            }
          </Card.Body>
        </Col>
      </Row>
      <Card.Footer>Price: ${data.price}</Card.Footer>
    </Card>
  );
};

export default ItemDetail;
