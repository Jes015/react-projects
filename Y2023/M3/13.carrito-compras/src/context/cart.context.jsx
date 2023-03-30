// React
import { useState, createContext } from 'react'

export const Cart = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

  const addProduct = (product) => {
    const tempProductIndex = cart.findIndex((element) => element.id === product.id)
    const tempCart = structuredClone(cart)

    if (tempProductIndex === -1) {
      tempCart.push({ ...product, count: 1 })
    } else {
      tempCart[tempProductIndex].count += 1
    }

    localStorage.setItem('cart', JSON.stringify(tempCart))
    setCart(tempCart)
  }

  const removeProduct = (product) => {
    if (cart.length === 0) { console.log('What are u trying? 0.0'); return }

    const tempProductIndex = cart.findIndex((element) => element.id === product.id)

    if (tempProductIndex === -1) return

    const tempCart = structuredClone(cart)

    if (cart[tempProductIndex].count > 1) {
      tempCart[tempProductIndex].count -= 1
    } else {
      tempCart.splice(tempProductIndex, 1)
    }

    localStorage.setItem('cart', JSON.stringify(tempCart))
    setCart(tempCart)
  }

  const removeProducts = () => {
    if (cart.length === 0) return

    setCart([])
    localStorage.setItem('cart', JSON.stringify([]))
  }

  return (
    <Cart.Provider value={{ cart, addProduct, removeProduct, removeProducts }}>
      {children}
    </Cart.Provider>
  )
}
