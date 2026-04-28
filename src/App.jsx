import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider, setCartToast } from './context/CartContext'
import { ToastProvider, useToast } from './context/ToastContext'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import Profile from './pages/Profile'
import TyreInventory from './pages/TyreInventory'
import ItemDetail from './pages/ItemDetail'
import Services from './pages/Services'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Wires toast into cart context
function ToastBridge() {
  const { addToast } = useToast()
  useEffect(() => { setCartToast(addToast) }, [addToast])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <ToastBridge />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/inventory" element={<TyreInventory />} />
        <Route path="/item/:id"  element={<ItemDetail />} />
        <Route path="/about"   element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart"    element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*"        element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

import { HelmetProvider } from 'react-helmet-async'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ToastProvider>
          <AuthProvider>
            <CartProvider>
              <Layout />
            </CartProvider>
          </AuthProvider>
        </ToastProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}
