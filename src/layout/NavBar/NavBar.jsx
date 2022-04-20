import Container from "react-bootstrap/Container";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="text-light text-decoration-none" to="/">
            techCommerce
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/category/smartphones">smartphones</NavLink>
            <NavLink className="nav-link" to="/category/tablets">tablets</NavLink>
            <NavLink className="nav-link" to="/category/smartwatches">smartwatches</NavLink>
          </Nav>
            <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
