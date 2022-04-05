import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getFirestore, getDocs, where, query } from "firebase/firestore"
import ItemList from "./ItemsList";
import Loading from "../../components/Loading/Loading";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState()

  const getAll = async () => {
    try {
      const db = getFirestore()
      let queryCollection = collection(db, "items")
      category &&
        ( queryCollection = query(queryCollection, where("category", "==", category)) )
      const res = await getDocs(queryCollection)
      setProducts(
        res.docs.map( element => ({id: element.id, ...element.data()}) )
      )
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(
    () => getAll(),
    [category]
  )

  return <>
    { products
        ? <ItemList products={products} />
        : <Loading/>
    }
  </>
};

export default ItemListContainer;
