// Importing JSON data.
import { useEffect, useState } from "react";
import * as data from "../../assets/data/data.json";
// Importing project components.
import ItemDetail from "./ItemDetail";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { default: products } = data;
  const { productId } = useParams();
  const product = products.filter(
    (element) => {
      return (element.id == productId) && element
    }
  )
  const [isReady, setIsReady] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  useEffect(() => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(setIsReady(true));
      }, 1000);
    }).catch((err) => {
      console.log(err);
    });
  });

  const getById = async (id) => {
    try {
      const db = getFirestore()
      const queryDoc = doc(db, "items", id)
      const res = await getDoc(queryDoc)
      console.log(res.data())
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(
    () => getById("xJldjpGq2fRFTO4qZWwq"),
    []
  )
  
  return <>{isReady ? <ItemDetail data={product[0]} isAddedToCart={isAddedToCart} setIsAddedToCart={setIsAddedToCart} /> : <Loading />}</>;
};

export default ItemDetailContainer;
