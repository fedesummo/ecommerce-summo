import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutContainer from "./layout/LayoutContainer";
import ItemListContainer from "./pages/root/ItemListContainer";
import ItemDetailContainer from "./pages/item/ItemDetailContainer";
import CartContainer from "./pages/cart/CartContainer";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutContainer />}>
            <Route index element={<ItemListContainer />} />
            <Route path="category/:category" element={<ItemListContainer />} />
            <Route path="item/:productId" element={<ItemDetailContainer />} />
            <Route path="cart" element={<CartContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
