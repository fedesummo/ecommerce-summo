// Importing react-bootstrap components.
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// Importing project components.
import CartWidget from "../CartWidget/CartWidget";
 import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      {/* bi-mask */}
        <Navbar.Brand>
          <Link className="text-light text-decoration-none" to="/">
            techC<i className="bi bi-tropical-storm"/>mmerce
            </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/category/smartphones">smartphones</NavLink>
          <NavLink className="nav-link" to="/category/tablets">tablets</NavLink>
          <NavLink className="nav-link" to="/category/smartwatches">smartwatches</NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
