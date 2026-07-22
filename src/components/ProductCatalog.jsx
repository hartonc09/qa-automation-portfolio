import { useMemo, useState } from 'react'
import { PRODUCTS, CATEGORIES } from '../data/products'
import ProductCard from './ProductCard'

export default function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <section data-testid="product-catalog">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-900" data-testid="catalog-heading">
          Product Catalog
        </h1>
        <p className="text-slate-600" data-testid="catalog-subheading">
          Browse QA testing tools and resources. Use search and filters to find products.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            data-testid="product-search-input"
          />
        </div>
        <div className="sm:w-56">
          <label htmlFor="category-filter" className="sr-only">
            Filter by category
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            data-testid="category-filter-select"
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div
          className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center"
          data-testid="no-products-message"
        >
          <p className="text-slate-600">No products match your search or filter criteria.</p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          data-testid="product-grid"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <p className="mt-6 text-sm text-slate-600" data-testid="product-count">
        Showing {filteredProducts.length} of {PRODUCTS.length} products
      </p>
    </section>
  )
}
