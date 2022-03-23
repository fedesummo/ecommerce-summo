// Importing JSON data.
import { useEffect, useState } from "react";
import * as data from "../../assets/data/data.json";
// Importing project components.
import ItemList from "./ItemsList";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category)
  const originalProductsList = data.default
  const [products, setProducts] = useState(originalProductsList)
  useEffect(() => {
    (category) ? (setProducts (originalProductsList.filter((element) => {
      return element.category == category && element;
    }))) : (setProducts(originalProductsList))
  }, [category]);
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
