import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { QADevToolsProvider } from './context/QADevToolsContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import QADevTools from './components/QADevTools'
import ScrollToTop from './components/ScrollToTop'
import LandingPage from './pages/LandingPage'
import StorePage from './pages/StorePage'
import CartPage from './pages/CartPage'
import TestStrategyPage from './pages/TestStrategyPage'
import LiveReportsPage from './pages/LiveReportsPage'
import QAMatrix from './pages/QAMatrix'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'

export default function App() {
  return (
    <BrowserRouter>
      <QADevToolsProvider>
        <CartProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-slate-50 flex flex-col" data-testid="app-root">
            <Navbar />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/test-strategy" element={<TestStrategyPage />} />
                <Route path="/qa-matrix" element={<QAMatrix />} />
                <Route path="/live-reports" element={<LiveReportsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostPage />} />
              </Routes>
            </div>
            <Footer />
            <CartDrawer variant="drawer" />
            <QADevTools />
          </div>
        </CartProvider>
      </QADevToolsProvider>
    </BrowserRouter>
  )
}