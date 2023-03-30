// React
import { useContext, useId } from 'react'

// Contexts
import { Cart as CartContext } from '../context/cart.context'

// Styles
import styles from './cart.module.css'

// Icons
import { CartIcon } from './Icons'

// Custom components
import CartProduct from './CartProduct'

export default function Cart () {
  const { cart, removeProducts } = useContext(CartContext)
  const checkboxId = useId()
  return (
    <>
      <label htmlFor={checkboxId} className={styles.cart__checkbox}><CartIcon /></label>
      <input id={checkboxId} type='checkbox' hidden />
      <div className={styles.cart}>
        <header>
          <h3>Cart</h3>
        </header>
        <main>
          {cart[0] ? cart.map((element) => <CartProduct key={element.id} data={element} />) : <h5>No products found</h5>}
        </main>
        <footer>
          <button onClick={removeProducts}>Remove items</button>
        </footer>
      </div>
    </>
  )
}
