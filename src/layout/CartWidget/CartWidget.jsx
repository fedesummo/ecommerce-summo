// Importing component stylesheet.
import { Badge, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cart, totalItems } = useCartContext()
  return (
    <Nav>
      <NavLink className="nav-link d-flex gap-2" to="/cart">
        
        <i className="bi bi-cart4"/>cart
          {cart.length > 0 && <Badge bg="secondary">{totalItems()}</Badge>}
      </NavLink>
    </Nav>
  );
};

export default CartWidget;