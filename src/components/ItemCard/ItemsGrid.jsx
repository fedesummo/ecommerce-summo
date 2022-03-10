import { Col, Row } from 'react-bootstrap';
import * as data from '../../assets/data/data.json'
import ItemCard from './ItemCard';

const ItemsGrid = () => {
    const { default: products } = data
    console.log(products)
  return (
      <Row style={{width: "100vw"}}>
    { products.map(
        (element) => <Col><ItemCard key={element.id} productData={element}/></Col>
    ) }
    </Row>
  );
};

export default ItemsGrid;