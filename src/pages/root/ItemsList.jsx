import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ItemCardContainer from "./ItemCard/ItemCardContainer";

const ItemsList = ({products}) => {
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