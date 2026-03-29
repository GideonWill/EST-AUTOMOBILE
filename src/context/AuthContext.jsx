import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Gideon Amarh',
    email: 'niiamarh024@gmail.com',
    phone: '+233 24 000 0000',
    address: '123 Accra St, Greater Accra, Ghana',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&h=100&q=80',
  })

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('etse_orders')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('etse_orders', JSON.stringify(orders))
  }, [orders])

  function addOrder(order) {
    const newOrder = {
      ...order,
      id: `EST-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-GB'),
      status: 'Processing',
    }
    setOrders(prev => [newOrder, ...prev])
    return newOrder
  }

  function logout() {
    setUser(null)
    setOrders([])
    localStorage.removeItem('etse_orders')
  }

  return (
    <AuthContext.Provider value={{ user, orders, addOrder, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
