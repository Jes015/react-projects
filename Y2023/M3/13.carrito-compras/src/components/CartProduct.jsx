// React
import { useContext } from 'react'

// Context
import { Cart } from '../context/cart.context'

export default function CartProduct ({ data }) {
  const { addProduct, removeProduct } = useContext(Cart)

  const handleAddClick = () => {
    addProduct(data)
  }
  const handleRemoveClick = () => {
    if (data.count === 1) return
    removeProduct(data)
  }
  return (
    <div>
      <header>
        {data.title}
      </header>
      <main>
        <img src={data.thumbnail} alt={data.title} />
      </main>
      <footer>
        <span>{data.count}</span>
        <button onClick={handleAddClick}>+</button>
        <button onClick={handleRemoveClick}>-</button>
      </footer>
    </div>
  )
}
