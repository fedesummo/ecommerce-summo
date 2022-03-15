// Importing bootstrap components.
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// Importing project components.
import ItemCardContainer from "../ItemCardContainer/ItemCardContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemsList = ({products}) => {
  console.log(products)
  return (
    <>
    <Row style={{ width: "100vw" }}>
      {products.map((element) => (
        <Col key={element.id}>
          <ItemCardContainer productData={element} />
        </Col>
      ))}
    </Row>
    <ItemDetailContainer data={products[0]}/>
    </>
  );
};

export default ItemsList;
