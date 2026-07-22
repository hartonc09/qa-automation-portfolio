import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive
      ? 'bg-indigo-600 text-white'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`

export default function Navbar() {
  const { itemCount, openCart } = useCart()

  return (
    <header
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur"
      data-testid="navbar"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
            QA
          </div>
          <span className="text-lg font-semibold text-slate-900">QA Test Store</span>
        </div>

        <nav className="flex items-center gap-2" data-testid="navbar-links">
          <NavLink to="/" end className={navLinkClass} data-testid="nav-store-link">
            Store
          </NavLink>
          <NavLink to="/test-strategy" className={navLinkClass} data-testid="nav-test-strategy-link">
            Test Strategy
          </NavLink>
          <NavLink to="/qa-matrix" className={navLinkClass} data-testid="nav-qa-matrix-link">
            QA Matrix
          </NavLink>
          <NavLink to="/live-reports" className={navLinkClass} data-testid="nav-live-reports-link">
            Live Reports
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={openCart}
          className="relative flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          data-testid="nav-cart-button"
          aria-label="Open cart"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Cart
          {itemCount > 0 && (
            <span
              className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-500 px-1 text-xs font-bold"
              data-testid="nav-cart-count"
            >
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}