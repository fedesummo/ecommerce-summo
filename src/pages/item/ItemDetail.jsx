// Importing bootstrap components.
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CounterContainer from "../../components/Counter/CounterContainer";

const ItemDetail = ({ data }) => {
  console.log(data)
  return (
    <Card className="my-5 mx-auto" style={{ textAlign: "center", width: "55rem" }}>
      <Card.Header>{data.name}</Card.Header>
      <Row>
        <Col>
          <Card.Img src={data.imgUrl} />
        </Col>
        <Col>
          <Card.Body>
          <Card.Title><i className="bi bi-text-left"></i> Description</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
          {/* <Card.Text>{data.description}</Card.Text> */}
            <Card.Title><i class="bi bi-gear"></i> Specs</Card.Title>
            <Card.Text className="mb-0"><i>Operative System:</i> {data.specs.os}</Card.Text>
            <Card.Text className="mb-0"><i>Display:</i> {data.specs.display}</Card.Text>
            <Card.Text className="mb-0"><i>Battery:</i> {data.specs.battery}</Card.Text>
            <Card.Text><i>Memory:</i> {data.specs.memory}</Card.Text>
            <Card.Title><i className="bi bi-truck"></i> Shop now and get free shipping!</Card.Title>
            <Card.Title><i className="bi bi-credit-card"></i> We accept all credit and debit cards!</Card.Title>
            <CounterContainer initialStock={data.stock}/>
          </Card.Body>
        </Col>
      </Row>

      <Card.Footer>Price: ${data.price}</Card.Footer>
    </Card>
  );
};

export default ItemDetail;
