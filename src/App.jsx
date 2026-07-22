import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { QADevToolsProvider } from './context/QADevToolsContext'
import Navbar from './components/Navbar'
import CartDrawer from './components/CartDrawer'
import QADevTools from './components/QADevTools'
import StorePage from './pages/StorePage'
import CartPage from './pages/CartPage'
import TestStrategyPage from './pages/TestStrategyPage'
import LiveReportsPage from './pages/LiveReportsPage'
import QAMatrix from './pages/QAMatrix' // 1. Import your QAMatrix page

export default function App() {
  return (
    <BrowserRouter>
      <QADevToolsProvider>
        <CartProvider>
          <div className="min-h-screen bg-slate-50" data-testid="app-root">
            <Navbar />
            <Routes>
              <Route path="/" element={<StorePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/test-strategy" element={<TestStrategyPage />} />
              <Route path="/qa-matrix" element={<QAMatrix />} /> {/* 2. Add the route */}
              <Route path="/live-reports" element={<LiveReportsPage />} />
            </Routes>
            <CartDrawer variant="drawer" />
            <QADevTools />
          </div>
        </CartProvider>
      </QADevToolsProvider>
    </BrowserRouter>
  )
}