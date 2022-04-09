import { useCartContext } from "../../../context/CartContext"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const CartDetail = () => {
  const { removeItem, cart, totalPrice } = useCartContext()
  
  return(
  <Table>
          <thead>
            <tr>
              <th>Product Detail</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            { cart.map(
              element => <tr>
                            <td>
                              <Row>
                                <Col>
                                  <img style={{maxHeight: "7rem"}} src={element.item.imgUrl} />
                                </Col>
                                <Col>
                                  <Row className="h4">{element.item.name}</Row>
                                  {/* <Row>{element.item.specs.os}</Row>
                                  <Row>{element.item.specs.display}</Row>
                                  <Row>{element.item.specs.memory}</Row>
                                  <Row>{element.item.specs.battery}</Row> */}
                                </Col>
                              </Row>
                            </td>
                            <td>{element.quantity}</td>
                            <td>{ element.quantity * element.item.price }</td>
                            <td>
                              <Button variant="outline-dark" onClick={() => removeItem(element.item.id)}>
                                <i className="bi bi-trash3-fill"/>
                              </Button>
                            </td>
                          </tr>
            ) }
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Total Price: <span className="fw-normal">${totalPrice()} USD</span></th>
            </tr>
          </tfoot>
        </Table>
  )
}

export default CartDetail