// Importing bootstrap stylesheet.
import "bootstrap/dist/css/bootstrap.min.css";

// Importing react-bootstrap components.
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import CartWidget from "./components/CartWidget/CartWidget";

// Importing project components.
import ItemCard from "./components/ItemCard/ItemCard"
import ItemsGrid from "./components/ItemCard/ItemsGrid";

const App = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My eCommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
      <main>
        <ItemsGrid/>
      </main>
    </>
  );
};

export default App;
