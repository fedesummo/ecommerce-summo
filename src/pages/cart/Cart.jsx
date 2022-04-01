// Importing context.
import { Col, Row, Table, Button, Container, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import sadCartImg from "./sad-cart.png"

const Cart = () => {
  // Importing functions and variables from cart context.
  const { clear, removeItem, cart, calculateTotalPrice } = useCartContext()
  return(<>
    {(cart.length > 0)  
      ? <Table>
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
                                  <Row>{element.item.specs.os}</Row>
                                  <Row>{element.item.specs.display}</Row>
                                  <Row>{element.item.specs.memory}</Row>
                                  <Row>{element.item.specs.battery}</Row>
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
              <th>Total Price: {calculateTotalPrice()}</th>
              <th></th>
            </tr>
          </tfoot>
        </Table>
      : <Stack className="align-items-center" gap={3}>
          <p className="h2 m-0" >Your cart is empty!</p>
          <img src={sadCartImg} style={{maxWidth: "10rem"}}/>
          <Link as="button" to="/" className="btn btn-outline-dark">Explore the Store</Link>
        </Stack>
      // : <Container>
      //     <Row>
      //       <h2>Your cart is empty!</h2>
      //     </Row>
      //     <Row>
      //       <img src={sadCartImg} style={{maxWidth: "10rem"}}/>
      //     </Row>
      //     <Row>
      //       <Button variant="outline-dark" style={{width: "fit-content"}}>
      //         Explore the Store
      //       </Button>
      //     </Row>
      //   </Container>
    }
    
  </>)
  // return (
  //   <>
  //   <div>
  //     <h2>Cart:</h2>
  //     {
  //     (cart && cart.length > 0) 
  //       ? <ul>
  //         {cart.map(element => <li key={element.item.id}>Product: {element.item.name}. Quantity: {element.quantity} <button onClick={ () => removeItem(element.item.id) }><i className="bi bi-trash3-fill"/></button> </li>)}
  //         </ul>
  //       : <p>The cart is empty</p>
  //     }
  //   </div>
    
  //   <button onClick={clear}>Clear Cart</button>
  //   </>
  // )
}

export default Cart