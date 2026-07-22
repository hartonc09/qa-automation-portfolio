import { createContext, useContext, useState, useMemo, useCallback } from 'react'
import { VALID_PROMO_CODE, PROMO_DISCOUNT_PERCENT } from '../data/products'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [promoError, setPromoError] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = useCallback((product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((productId) => {
    setItems((prev) => prev.filter((item) => item.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    )
  }, [])

  const applyPromoCode = useCallback(() => {
    const trimmed = promoCode.trim().toUpperCase()
    if (trimmed === VALID_PROMO_CODE) {
      setAppliedPromo(trimmed)
      setPromoError('')
      return true
    }
    setAppliedPromo(null)
    setPromoError('Invalid promo code. Try DISCOUNT10 for 10% off.')
    return false
  }, [promoCode])

  const clearCart = useCallback(() => {
    setItems([])
    setPromoCode('')
    setAppliedPromo(null)
    setPromoError('')
  }, [])

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  )

  const discount = useMemo(() => {
    if (!appliedPromo) return 0
    return subtotal * (PROMO_DISCOUNT_PERCENT / 100)
  }, [subtotal, appliedPromo])

  const total = useMemo(() => Math.max(subtotal - discount, 0), [subtotal, discount])

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const openCart = useCallback(() => setIsCartOpen(true), [])
  const closeCart = useCallback(() => setIsCartOpen(false), [])
  const toggleCart = useCallback(() => setIsCartOpen((prev) => !prev), [])

  return (
    <CartContext.Provider
      value={{
        items,
        promoCode,
        setPromoCode,
        appliedPromo,
        promoError,
        subtotal,
        discount,
        total,
        itemCount,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        applyPromoCode,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
