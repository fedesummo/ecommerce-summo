import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { productId } = useParams()

  const [product, setProduct] = useState()
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const getById = async (id) => {
    try {
      const db = getFirestore()
      const queryDoc = doc(db, "items", id)
      const res = await getDoc(queryDoc)
      setProduct({id: res.id, ...res.data()})
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(
    () => getById(productId),
    []
  )
  
  return <>
    { product
        ? <ItemDetail data={product} isAddedToCart={isAddedToCart} setIsAddedToCart={setIsAddedToCart}/>
        : <Loading/>
    }
  </>
};

export default ItemDetailContainer;
