import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-all ${
    isActive
      ? 'bg-indigo-600 text-white shadow-md'
      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
  }`

export default function Navbar() {
  const { itemCount, openCart } = useCart()

  return (
    <header
      className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm"
      data-testid="navbar"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 text-sm font-bold text-white shadow-md">
            QA
          </div>
          <span className="text-lg font-bold text-gray-900">QA Portfolio</span>
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" data-testid="navbar-links">
          <NavLink to="/store" className={navLinkClass} data-testid="nav-store-link">
            Test Area
          </NavLink>
          <NavLink to="/blog" className={navLinkClass} data-testid="nav-blog-link">
            Blog
          </NavLink>
          <NavLink to="/test-strategy" className={navLinkClass} data-testid="nav-test-strategy-link">
            Strategies
          </NavLink>
          <NavLink to="/qa-matrix" className={navLinkClass} data-testid="nav-qa-matrix-link">
            Framework
          </NavLink>
          <NavLink to="/live-reports" className={navLinkClass} data-testid="nav-live-reports-link">
            Projects
          </NavLink>
        </nav>

        {/* Right Side - Cart Button */}
        <button
          type="button"
          onClick={openCart}
          className="relative flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-700 shadow-md hover:shadow-lg"
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
          <span className="hidden sm:inline">Cart</span>
          {itemCount > 0 && (
            <span
              className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white"
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