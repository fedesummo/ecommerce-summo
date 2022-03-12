import Container from "react-bootstrap/Container";

const Loading = () => {
  return (
    <Container className="d-flex justify-content-center gap-3">
          <img src="loading.gif" alt="" style={{height: "3rem"}}/>
          <p style={{fontSize: "2rem"}}>Loading, please wait...</p>
    </Container>
  );
};

export default Loading;
