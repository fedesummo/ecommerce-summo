import CheckoutFormContainer from "./CheckoutForm/CheckoutFormContainer"
import CartDetailContainer from "./CartDetail/CartDetailContainer"
import { useCartContext } from "../../context/CartContext"
import EmptyCart from "./EmptyCart/EmptyCart"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CartContainer = () => {
  const { cart } = useCartContext()
  
  return(<>
  {cart.length > 0
    ? <Row className="vw-100">
        <Col sm={10}>
          <CartDetailContainer/>
        </Col>
        <Col>
          <CheckoutFormContainer/>
        </Col>
      </Row>
    : <EmptyCart/>}
  </>)
}
export default CartContainer