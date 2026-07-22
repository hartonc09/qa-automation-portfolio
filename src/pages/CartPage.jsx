import CartDrawer from '../components/CartDrawer'

export default function CartPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" data-testid="cart-checkout-page">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-900" data-testid="cart-page-heading">
          Cart & Checkout
        </h1>
        <p className="text-slate-600">
          Review your items, apply promo codes, and complete your purchase.
        </p>
      </div>
      <CartDrawer variant="page" />
    </main>
  )
}
