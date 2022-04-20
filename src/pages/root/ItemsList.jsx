import ItemCardContainer from "./ItemCard/ItemCardContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ItemsList = ({products}) => {
  return (
    <Row className="mx-auto" sm={2} md={3} lg={4}>
      {products.map((element) => (
        <Col key={element.id}>
          <ItemCardContainer productData={element} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemsList;