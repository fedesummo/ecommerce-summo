// Importing bootstrap components.
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
// Importing components stylesheet.
require("./ItemCard.css");

const ItemCard = ({productData}) => {
  return (
    <Container fluid className="p-3">
      <Card>
        <Card.Header>{productData.name}</Card.Header>
        <Card.Body>
          <Container className="d-flex justify-content-center">
            <img className="product-img" src={productData.imgUrl} />
          </Container>
        </Card.Body>
        <Card.Footer>
          <Link to={`/item/${productData.id}`}>Detail</Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ItemCard;
