// Importing bootstrap components.
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
// Importing project components.
import Counter from "../../../components/Counter/Counter";
// Importing components stylesheet.
require("./ItemCard.css");

const ItemCard = ({ productData, isExpanded, setIsExpanded }) => {
  return (
    <Container fluid className="p-3">
      <Card>
        <Card.Header>{productData.name}</Card.Header>
        <Card.Body>
          <Container className="d-flex justify-content-center">
            <img className="product-img" src={productData.imgUrl} />
          </Container>
          <Counter initialStock={productData.stock} />
        </Card.Body>
        <Card.Footer>
          <Link to={`/item/${productData.id}`}>Detail</Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ItemCard;
