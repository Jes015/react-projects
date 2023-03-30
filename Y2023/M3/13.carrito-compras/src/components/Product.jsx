// Styles
import styles from './product.module.css'

// React
import { useContext, useState } from 'react'

// Context
import { Cart } from '../context/cart.context'

export default function Product ({ element }) {
  const { addProduct, removeProduct } = useContext(Cart)
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    if (added) {
      removeProduct(element)
      setAdded(false)
    } else {
      addProduct(element)
      setAdded(true)
    }
  }
  return (
    <div className={styles.product}>
      <header>
        <img src={element.thumbnail} alt={element.description} />
      </header>
      <footer>
        <span>{element.title}</span>
        <span> ${element.price}</span>
        <button onClick={handleClick}>{added ? 'Elminar' : 'Agregar'}</button>
      </footer>
    </div>
  )
}
