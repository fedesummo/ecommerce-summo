// Importing component stylesheet.
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cart, totalItems } = useCartContext()
  return (
    <>
    <svg id="cart-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-dash-fill" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
    </svg>
    <Nav>
      <NavLink className="nav-link" to="/cart">
        cart {cart.length > 0 && `(${totalItems()})`}
      </NavLink>
    </Nav>
    </>
  );
};

export default CartWidget;