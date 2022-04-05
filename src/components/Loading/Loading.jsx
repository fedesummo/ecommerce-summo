import { Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Loading = () => {
  return (
    <Container className="d-flex justify-content-center gap-3">
      <Spinner animation="border" role="status"/>
      <p style={{fontSize: "2rem"}}>Loading, please wait...</p>
    </Container>
  );
};

export default Loading;
