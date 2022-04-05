// Importing JSON data.
import { useEffect, useState } from "react";
import * as data from "../../assets/data/data.json";
// Importing project components.
import ItemList from "./ItemsList";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router-dom";
import { getFirebase } from "../../firebase/config";
import { collection, getFirestore, getDocs, doc, getDoc, where, query } from "firebase/firestore"

const ItemListContainer = () => {
  const { category } = useParams();
  const originalProductsList = data.default
  const [products, setProducts] = useState(originalProductsList)
  useEffect(() => {
    (category) ? (setProducts (originalProductsList.filter((element) => {
      return element.category == category && element;
    }))) : (setProducts(originalProductsList))
  }, [category]);
  const [isReady, setIsReady] = useState(false);

  // const getAll = async () => {
  //   try {
  //     const db = getFirestore()
  //     // const queryCollection = collection(db, "items")
  //     // const response = await getDocs(db, queryCollection)
  //     const queryDoc = doc(db, "items", "2Pr1IFwMqgd27UNdhCME")
  //     getDoc(queryDoc)
  //     console.log(await getDoc(queryDoc))
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  useEffect(
    () => {
      const db = getFirestore()

      // UNO SOLO
      // const queryDoc = doc(db, "items", "2Pr1IFwMqgd27UNdhCME")
      // getDoc(queryDoc).then( res => console.log( { id: res.id, ...res.data() }) )

      // COLECCION COMPLETA
      // const queryCollection = collection(db, "items")
      // getDocs(queryCollection)
      //   .then(
      //     res => console.log(
      //       res.docs.map( element => ({ id: element.id, ...element.data() }) )
      //     )
      //   )

      // POR CATEGORIA (filtrado)
      const queryCollection = collection(db, "items")
      const queryFilter = query(queryCollection, where("category", "==", "smartphones"))
      getDocs(queryFilter)
        .then( res => console.log(res) )

    }
  )


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
