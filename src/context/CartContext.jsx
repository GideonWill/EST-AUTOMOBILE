import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

// Toast is handled externally via a callback set from ToastProvider
let _toast = null
export function setCartToast(fn) { _toast = fn }

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const cartCount = items.reduce((s, i) => s + i.qty, 0)
  const cartTotal = items.reduce((s, i) => s + i.price * i.qty, 0)

  function addToCart(product) {
    setItems(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) {
        if (_toast) _toast(`${product.name.slice(0, 24)}… qty updated`)
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      }
      if (_toast) _toast(`${product.name.slice(0, 24)}… added to cart`)
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function updateQty(id, qty) {
    if (qty < 1) return removeFromCart(id)
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i))
  }

  function clearCart() { setItems([]) }

  return (
    <CartContext.Provider value={{ items, cartCount, cartTotal, addToCart, removeFromCart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
