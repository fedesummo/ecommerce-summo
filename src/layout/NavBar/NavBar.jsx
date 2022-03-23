// Importing react-bootstrap components.
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// Importing project components.
import CartWidget from "../CartWidget/CartWidget";
 import { Link, NavLink } from "react-router-dom";

const NavBar = ({navigate}) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link className="text-light text-decoration-none" to="/">myEcommerce</Link></Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/category/smartphones">smartphones</NavLink>
          <NavLink className="nav-link" to="/category/smartwatches">smartwatches</NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
