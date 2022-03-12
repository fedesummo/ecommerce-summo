// Importing JSON data.
import { useState } from "react";
import * as data from "../../assets/data/data.json";
// Importing project components.
import ItemList from "../ItemsList/ItemsList"
import Loading from "../Loading/Loading";

const ItemListContainer = () => {
  const { default: products } = data
  const [isReady, setIsReady] = useState(false);
  new Promise(
    (resolve, reject) => {
      setTimeout(
        () => { resolve( setIsReady(true) ) },
        3000
       )
    }
   ).catch(
     (error) => {
       alert(error)
     }
   )
  return (
    <>
    { (isReady)
      ? <ItemList products={products}/>
      : <Loading/>}
    </>
  );
};

export default ItemListContainer;