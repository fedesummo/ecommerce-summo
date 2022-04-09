import { getFirestore, collection, addDoc } from "firebase/firestore"
import { useCartContext } from "../../../context/CartContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import CheckoutForm from "./CheckoutForm"

const CheckoutFormContainer = () => {
  const [showModal, setShowModal] = useState(false)
  const [orderId, setOrderId] = useState()
  
  const { cart, totalPrice, clear } = useCartContext()
  const navigate = useNavigate()

  const onSubmit = async (event) => {
    try {
      event.preventDefault()
      const order = {
        buyer: Array.from( event.target.querySelectorAll("input") ).reduce(
          (acum, element) => ({...acum, [element.name]: element.value}),
          {}
        ),
        items: cart.map(
            element => ({
              id: element.item.id,
              name: element.item.name,
              price: element.item.price * element.quantity
            })
        ),
        total: totalPrice()
      }
      const db = getFirestore()
      const queryCollection = collection(db, "orders")
      const res = await addDoc(queryCollection, order)
      setOrderId( res.id )
      setShowModal(true)
  } catch (err) {
      console.log(err)
    }
  }

  return(
    <CheckoutForm
      onSubmit={onSubmit}
      showModal={showModal}
      orderId={orderId}
      navigate={navigate}
    />)
}

export default CheckoutFormContainer