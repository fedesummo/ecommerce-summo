import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
require("./ItemCard.css");

const ItemCard = ({productData}) => {
  return (
    <Container fluid className="p-3 h-100">
      <Card className="h-100">
        <Card.Header className={`d-flex justify-content-between ${productData.isNew && "bg-warning"}`}>
          <div>
            {productData.name}
          </div>
          { productData.isNew &&
          <div>
            <i className="bi bi-award-fill me-1"/>New!
          </div> }     
        </Card.Header>
        <Card.Body>
          <Container className="d-flex justify-content-center">
            <img className="product-img" src={productData.imgUrl} />
          </Container>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <Link to={`/item/${productData.id}`} className="btn btn-outline-dark p-1 text-nowrap border-0">
            Detail
            <i className="bi bi-caret-right"/>
          </Link>
          <Button variant="outline-dark" className="p-1 border-0">
            Share<i className="ms-2 bi bi-share"/>
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ItemCard;
