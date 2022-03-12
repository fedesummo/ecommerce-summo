// Importing bootstrap components.
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// Importing project components.
import ItemCard from "../ItemCard/ItemCard";
// Importing JSON data.
import * as data from "../../assets/data/data.json";

const ItemsList = () => {
  const { default: products } = data;
  return (
    <Row style={{ width: "100vw" }}>
      {products.map((element) => (
        <Col key={element.id}>
          <ItemCard productData={element} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemsList;
