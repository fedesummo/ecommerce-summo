import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import Cart from "./Cart"

const CartContainer = () => {


  const { cart, totalPrice } = useCartContext()

  // const getOrder = async () => {
  //   try {
      // const order = {}
      // order.buyer = {
      //   name: "Federico Summo",
      //   email: "fede@email.com",
      //   phone: "+54 9 3364 662404"
      // }
      // order.items = cart.map(
      //   element => ({id: element.item.id,
      //     name: element.item.name,
      //     price: element.item.price * element.quantity})
      // )
      // order.total = totalPrice()
  //     const db = getFirestore()
      // const queryCollection = collection(db, "orders")
      // const res = await addDoc(queryCollection, order)
  //     // guardar el id asignado para mostrarlo
  //     // const { id } = res
  //     console.log("Firebase response: ", res)
  //   } catch (err) {
  //     console.log(err)
  //   }

  // }

  // const updateStock = async () => {
  //   try {
  //     const db = getFirestore()
  //     const queryUpdate = doc(db, "items", "2Pr1IFwMqgd27UNdhCME")
  //     const res = await updateDoc(queryUpdate, { stock: 20 } )
  //     console.log(res)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  const checkout = async () => {
    try {
      // INFORMACIÓN DE LA ORDEN
      const order = {}
      order.buyer = {
        name: "Federico Summo",
        email: "fede@email.com",
        phone: "+54 9 3364 662404"
      }
      order.items = cart.map(
        element => ({id: element.item.id,
          name: element.item.name,
          price: element.item.price * element.quantity})
      )
      order.total = totalPrice()
      // DB CONFIG
      const db = getFirestore()
      // REGISTRO LA ORDEN
      let queryCollection = collection(db, "orders")
      await addDoc(queryCollection, order)
      // ACTUALIZO EL STOCK
      queryCollection = collection(db, "items")
      await query(
        queryCollection,
        where( documentId(), "in", cart.map(element => element.id) )
      )

      const batch = writeBatch(db)
      
      const res = await getDocs(queryCollection)
      res.docs.forEach(
        element => batch.update(
          element.ref
        )
      )

      batch.commit()
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
    <button onClick={updateStock} >Click me!</button>
    {/* <Cart
    getOrder={getOrder}
    /> */}
    </>
  )
}

export default CartContainer