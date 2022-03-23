// Importign react-router-dom hook.
import { useNavigate } from "react-router-dom";
// Importing project components.
import NavBar from "./NavBar";

const NavBarContainer = () => {
  const navigate = useNavigate();
  return <NavBar navigate={navigate}/>;
};

export default NavBarContainer;
