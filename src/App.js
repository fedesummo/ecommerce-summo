// Importing react-router-dom components.
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Importing bootstrap stylesheet.
import "bootstrap/dist/css/bootstrap.min.css";
// Importing project components.
import LayoutContainer from "./layout/LayoutContainer";
import ItemListContainer from "./pages/root/ItemListContainer";
import ItemDetailContainer from "./pages/item/ItemDetailContainer"
import CartContainer from "./pages/cart/CartContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutContainer/>}>
          <Route index element={<ItemListContainer/>}/>
          <Route path="category/:category" element={<ItemListContainer/>}/>
          <Route path="item/:productId" element={<ItemDetailContainer/>}/>
          <Route path="cart" element={<CartContainer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
