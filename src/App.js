// Importing bootstrap stylesheet.
import "bootstrap/dist/css/bootstrap.min.css";
// Importing project components.
import NavBar from "./components/NavBar/NavBar";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <>
      <NavBar/>
      <MainContent/>
      {/* <AsideContent/> */}
      {/* <Footer/> */}
    </>
  );
};

export default App;