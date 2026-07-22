import { useState } from 'react'
import { useCart } from '../context/CartContext'
import CheckoutForm from './CheckoutForm'

export default function CartDrawer({ variant = 'drawer' }) {
  const {
    items,
    promoCode,
    setPromoCode,
    appliedPromo,
    promoError,
    subtotal,
    discount,
    total,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    applyPromoCode,
    clearCart,
  } = useCart()

  const [orderComplete, setOrderComplete] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const isVisible = variant === 'page' || isCartOpen

  const handleClose = () => {
    closeCart()
    setShowCheckout(false)
    setOrderComplete(false)
  }

  const handleCheckoutSuccess = () => {
    setOrderComplete(true)
    clearCart()
    setShowCheckout(false)
  }

  if (!isVisible) return null

  const content = (
    <div
      className={`flex h-full flex-col bg-white ${
        variant === 'drawer' ? 'w-full max-w-md shadow-2xl' : 'w-full'
      }`}
      data-testid="cart-drawer"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <h2 className="text-xl font-bold text-slate-900" data-testid="cart-heading">
          {orderComplete ? 'Order Confirmed' : showCheckout ? 'Checkout' : 'Shopping Cart'}
        </h2>
        {variant === 'drawer' && (
          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-800"
            data-testid="cart-close-button"
            aria-label="Close cart"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4">
        {orderComplete ? (
          <div className="py-8 text-center" data-testid="checkout-success-message">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Thank you for your order!</h3>
            <p className="text-sm text-slate-600">Your order has been placed successfully.</p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 rounded-lg bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              data-testid="cart-continue-shopping-button"
            >
              Continue Shopping
            </button>
          </div>
        ) : showCheckout ? (
          <CheckoutForm onSuccess={handleCheckoutSuccess} />
        ) : items.length === 0 ? (
          <div className="py-12 text-center" data-testid="cart-empty-message">
            <p className="text-slate-600">Your cart is empty.</p>
            <p className="mt-1 text-sm text-slate-600">Add products from the store to get started.</p>
          </div>
        ) : (
          <>
            <ul className="space-y-4" data-testid="cart-items-list">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 rounded-lg border border-slate-200 p-3"
                  data-testid={`cart-item-${item.id}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover"
                    data-testid={`cart-item-image-${item.id}`}
                  />
                  <div className="flex flex-1 flex-col">
                    <h4
                      className="text-sm font-semibold text-slate-900"
                      data-testid={`cart-item-name-${item.id}`}
                    >
                      {item.name}
                    </h4>
                    <p
                      className="text-sm text-slate-600"
                      data-testid={`cart-item-price-${item.id}`}
                    >
                      ${item.price.toFixed(2)} each
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="flex h-7 w-7 items-center justify-center rounded border border-slate-300 text-sm disabled:opacity-40"
                        data-testid={`cart-quantity-decrease-${item.id}`}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>
                      <span
                        className="w-8 text-center text-sm font-medium"
                        data-testid={`cart-quantity-${item.id}`}
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded border border-slate-300 text-sm"
                        data-testid={`cart-quantity-increase-${item.id}`}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-xs text-red-600 hover:text-red-800"
                        data-testid={`cart-remove-item-${item.id}`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-slate-200 pt-4">
              <label htmlFor="promo-code" className="mb-1 block text-sm font-medium text-slate-700">
                Promo Code
              </label>
              <div className="flex gap-2">
                <input
                  id="promo-code"
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  data-testid="promo-code-input"
                />
                <button
                  type="button"
                  onClick={applyPromoCode}
                  className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                  data-testid="apply-promo-button"
                >
                  Apply
                </button>
              </div>
              {promoError && (
                <p className="mt-2 text-xs text-red-600" data-testid="promo-error-message" role="alert">
                  {promoError}
                </p>
              )}
              {appliedPromo && (
                <p className="mt-2 text-xs text-green-600" data-testid="promo-success-message">
                  Promo code {appliedPromo} applied — 10% discount!
                </p>
              )}
            </div>
          </>
        )}
      </div>

      {!orderComplete && !showCheckout && items.length > 0 && (
        <div className="border-t border-slate-200 px-6 py-4" data-testid="cart-totals">
          <div className="mb-2 flex justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span data-testid="cart-subtotal">${subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="mb-2 flex justify-between text-sm text-green-600">
              <span>Discount (10%)</span>
              <span data-testid="cart-discount">−${discount.toFixed(2)}</span>
            </div>
          )}
          <div className="mb-4 flex justify-between text-lg font-bold text-slate-900">
            <span>Total</span>
            <span data-testid="cart-total">${total.toFixed(2)}</span>
          </div>
          <button
            type="button"
            onClick={() => setShowCheckout(true)}
            className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            data-testid="checkout-button"
          >
            Proceed to Checkout
          </button>
        </div>
      )}

      {showCheckout && !orderComplete && (
        <div className="border-t border-slate-200 px-6 py-3">
          <button
            type="button"
            onClick={() => setShowCheckout(false)}
            className="text-sm text-indigo-600 hover:text-indigo-800"
            data-testid="back-to-cart-button"
          >
            ← Back to Cart
          </button>
        </div>
      )}
    </div>
  )

  if (variant === 'page') {
    return (
      <div className="mx-auto max-w-lg" data-testid="cart-page">
        <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">{content}</div>
      </div>
    )
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/40"
        onClick={handleClose}
        data-testid="cart-overlay"
        aria-hidden="true"
      />
      <div className="fixed inset-y-0 right-0 z-50 flex">{content}</div>
    </>
  )
}
