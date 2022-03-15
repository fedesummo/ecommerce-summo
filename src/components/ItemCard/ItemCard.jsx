// Importing bootstrap components.
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
// Importing project components.
import Counter from "../Counter/Counter";
// Importing components stylesheet.
require("./ItemCard.css");

const ItemCard = ({ productData, isExpanded, setIsExpanded }) => {
  return (
    <Container fluid className="p-3">
      <Card>
        <Card.Header>{productData.name}</Card.Header>
        <Card.Body>
          <Container className="d-flex justify-content-center">
            <img
              className="product-img"
              src={`./${productData.shortName}.jpg`}
            />
          </Container>
          {isExpanded && (
            <Container>
              <ul style={{ listStyle: "none" }}>
                <li>Operative System: {productData.specs.os}</li>
                <li>Display: {productData.specs.display}</li>
                <li>Battery: {productData.specs.battery}</li>
                <li>Memory: {productData.specs.memory}</li>
              </ul>
            </Container>
          )}
          <Counter initialStock={productData.stock} />
        </Card.Body>
        <Card.Footer>
          <a
            href="#"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "Hide Overview" : "Show overview" }
          </a>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ItemCard;
