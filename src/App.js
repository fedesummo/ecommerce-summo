// Importing react-router-dom components.
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Importing bootstrap stylesheet.
import "bootstrap/dist/css/bootstrap.min.css";
// Importing project components.
import LayoutContainer from "./layout/LayoutContainer";
import ItemListContainer from "./pages/root/ItemListContainer";
import ItemDetailContainer from "./pages/item/ItemDetailContainer"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutContainer/>}>
          <Route index element={<ItemListContainer/>}/>
          <Route path="category/:category" element={<ItemListContainer/>}/>
          <Route path="item/:productId" element={<ItemDetailContainer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
