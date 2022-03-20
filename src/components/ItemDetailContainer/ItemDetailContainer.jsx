// Importing JSON data.
import { useEffect, useState } from "react";
import * as data from "../../assets/data/data.json";
// Importing project components.
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  const { default: products } = data;
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(setIsReady(true));
      }, 1000);
    }).catch((err) => {
      console.log(err);
    });
  });
  // Returning the item detail of the first product.
  return <>{isReady ? <ItemDetail data={products[0]} /> : <Loading />}</>;
};

export default ItemDetailContainer;
