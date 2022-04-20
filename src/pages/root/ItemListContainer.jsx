import { collection, getFirestore, getDocs, where, query } from "firebase/firestore"
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemsList";

const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(true)

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
      setIsLoading(false)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(
    () => {
      getAll()
      setIsLoading(true)
    },
    [category]
  )

  return <>
    { isLoading
        ? <Loading/>
        : <ItemList products={products} /> }
  </>
};

export default ItemListContainer;
