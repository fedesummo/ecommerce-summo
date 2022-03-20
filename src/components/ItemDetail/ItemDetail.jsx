// Importing bootstrap components.
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemDetail = ({ data }) => {
  return (
    <Card style={{ textAlign: "center", width: "55rem" }}>
      <Card.Header>{data.name}</Card.Header>
      <Row>
        <Col>
          <Card.Img src={`${data.shortName}.jpg`} />
        </Col>
        <Col>
          <Card.Body>
          <Card.Title><i className="bi bi-text-left"></i> Description</Card.Title>
          <Card.Text>{data.description}</Card.Text>
            <Card.Title><i class="bi bi-gear"></i> Specs</Card.Title>
            <Card.Text className="mb-0"><i>Operative System:</i> {data.specs.os}</Card.Text>
            <Card.Text className="mb-0"><i>Display:</i> {data.specs.display}</Card.Text>
            <Card.Text className="mb-0"><i>Battery:</i> {data.specs.battery}</Card.Text>
            <Card.Text><i>Memory:</i> {data.specs.memory}</Card.Text>
            <Card.Title><i className="bi bi-truck"></i> Shop now and get free shipping!</Card.Title>
            <Card.Title><i className="bi bi-credit-card"></i> We accept all credit and debit cards!</Card.Title>
          </Card.Body>
        </Col>
      </Row>

      <Card.Footer>Price: ${data.price}</Card.Footer>
    </Card>
  );
};

export default ItemDetail;
