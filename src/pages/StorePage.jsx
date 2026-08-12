import ProductCatalog from '../components/ProductCatalog'

export default function StorePage() {
  return (
    <main className="bg-white" data-testid="store-page">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-gray-900">Test Tools & Resources</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our curated collection of testing tools, frameworks, and resources
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ProductCatalog />
      </div>
    </main>
  )
}
