import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article
      className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
      data-testid={`product-card-${product.id}`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
        data-testid={`product-image-${product.id}`}
      />
      <div className="flex flex-1 flex-col p-4">
        <span
          className="mb-1 text-xs font-medium uppercase tracking-wide text-indigo-600"
          data-testid={`product-category-${product.id}`}
        >
          {product.category}
        </span>
        <h3
          className="mb-2 text-lg font-semibold text-slate-900"
          data-testid={`product-name-${product.id}`}
        >
          {product.name}
        </h3>
        <p
          className="mb-4 flex-1 text-sm text-slate-600"
          data-testid={`product-description-${product.id}`}
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="text-xl font-bold text-slate-900"
            data-testid={`product-price-${product.id}`}
          >
            ${product.price.toFixed(2)}
          </span>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            data-testid={`add-to-cart-${product.id}`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
