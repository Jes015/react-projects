// Custom styles
import styles from './App.module.css'

// Custom components
import Filters from './components/Filters'
import Cart from './components/Cart'
import Products from './components/Products'

// Custom contexts
import { CartProvider } from './context/cart.context'
import useFilter from './hooks/useFilter'

// Mocks
import productsData from './mocks/products.json'

function App () {
  const { filterProducts } = useFilter()
  return (
    <>
      <header className={styles.header}>
        <h1>Carrito de compras</h1>
        <Filters />
      </header>
      <main>
        <CartProvider>
          <Products products={filterProducts(productsData.products)} />
          <Cart />
        </CartProvider>
      </main>
    </>
  )
}

export default App
