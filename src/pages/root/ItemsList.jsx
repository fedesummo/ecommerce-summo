// Importing bootstrap components.
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// Importing project components.
import ItemCardContainer from "./ItemCard/ItemCardContainer";

const ItemsList = ({products}) => {
  console.log(products)
  return (
    <>
    <Row className="me-3" md="4">
      {products.map((element) => (
        <Col key={element.id}>
          <ItemCardContainer productData={element} />
        </Col>
      ))}
    </Row>
    </>
  );
};

export default ItemsList;
