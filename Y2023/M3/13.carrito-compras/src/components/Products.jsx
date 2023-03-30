// Styles
import styles from './products.module.css'

// Custom components
import Product from './Product'

export default function Products ({ products }) {
  console.log(products)
  return (
    <div className={styles.products}>
      {products[0] ? products.map((element) => <Product key={element.id} element={element} />) : <div>No products</div>}
    </div>
  )
}
