import { Card } from "react-bootstrap";

const ItemDetail = ({data}) => {
  return (
    <Card style={{textAlign: "center", width: "30rem"}}>
      <Card.Header>{data.name}</Card.Header>
      <Card.Img src={`${data.shortName}.jpg`} />
      <Card.Body>{data.description}</Card.Body>
      <Card.Footer>Price: ${data.price}</Card.Footer>
    </Card>
  );
};

export default ItemDetail;