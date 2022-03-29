const Cart = ({clear, removeItem, cart}) => {
  return (
    <>
    <div>
      <h2>Cart:</h2>
      {
      (cart && cart.length > 0) 
        ? <ul>
          {cart.map(element => <li key={element.item.id}>Product: {element.item.name}. Quantity: {element.quantity} <button onClick={ () => removeItem(element.item.id) }><i className="bi bi-trash3-fill"/></button> </li>)}
          </ul>
        : <p>The cart is empty</p>
      }
    </div>
    
    <button onClick={clear}>Clear Cart</button>
    </>
  )
}

export default Cart