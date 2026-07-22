import ProductCatalog from '../components/ProductCatalog'

export default function StorePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" data-testid="store-page">
      <ProductCatalog />
    </main>
  )
}
