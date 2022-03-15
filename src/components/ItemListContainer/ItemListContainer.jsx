// Importing JSON data.
import { useEffect, useState } from "react";
import * as data from "../../assets/data/data.json";
// Importing project components.
import ItemList from "../ItemsList/ItemsList";
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
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

  return <>{isReady ? <ItemList products={products} /> : <Loading />}</>;
};

export default ItemListContainer;
