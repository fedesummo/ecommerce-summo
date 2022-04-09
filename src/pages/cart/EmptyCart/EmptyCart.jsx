import Stack from "react-bootstrap/Stack"
import sadCartImg from "./sad-cart.png"
import { Link } from "react-router-dom"

const EmptyCart = () =>
    <Stack className="align-items-center" gap={3}>
        <p className="h2 m-0" >Your cart is empty!</p>
        <img src={sadCartImg} style={{maxWidth: "10rem"}}/>
        <Link as="button" to="/" className="btn btn-outline-dark">Explore the Store</Link>
    </Stack>

export default EmptyCart