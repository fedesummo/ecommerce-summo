// Importing project components.
import NavBar from "./NavBar/NavBar"
// Importing react-router-dom components.
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <NavBar/>
    <main>
      <Outlet/>
    </main>
    </>
  );
};

export default Layout;