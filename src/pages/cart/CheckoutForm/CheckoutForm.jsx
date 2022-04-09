import { useCartContext } from "../../../context/CartContext"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"

const CheckoutForm = ({ onSubmit, showModal, orderId, navigate }) => {
  const { clear } = useCartContext()
  return <>
    <Form onSubmit={onSubmit} method="post">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          name="phone"
          type="number"
          placeholder="Enter your phone number"
          required
        />
      </Form.Group>
      <Row className="d-flex align-items-center">
        <Button type="submit" variant="outline-dark">
          Let's pay!
        </Button>
      </Row>
    </Form>

    <Modal show={showModal}>
      <Modal.Header>
        <Modal.Title>Thank you for your order!</Modal.Title>
      </Modal.Header>
      <Modal.Body>ID: {orderId}</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={() => {navigate("/"); clear()}}>
          Back to the Store
        </Button>
      </Modal.Footer>
    </Modal>
  </>
}

export default CheckoutForm
