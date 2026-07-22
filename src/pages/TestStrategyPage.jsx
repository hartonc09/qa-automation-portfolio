export default function TestStrategyPage() {
  const strategies = [
    {
      title: 'Smoke Testing',
      description: 'Verify critical paths: add to cart, apply promo code, and checkout flow.',
      testIds: ['add-to-cart-*', 'checkout-button', 'checkout-submit-button'],
    },
    {
      title: 'Regression Testing',
      description: 'Ensure search, category filters, and cart quantity updates work after changes.',
      testIds: ['product-search-input', 'category-filter-select', 'cart-quantity-increase-*'],
    },
    {
      title: 'Negative Testing',
      description: 'Test invalid promo codes, empty form submission, and simulated 500 errors.',
      testIds: ['promo-error-message', 'checkout-error-message', 'qa-500-error-toggle'],
    },
    {
      title: 'Performance Testing',
      description: 'Enable 3-second network delay toggle and measure checkout response times.',
      testIds: ['qa-network-delay-toggle', 'checkout-submit-button'],
    },
  ]

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8" data-testid="test-strategy-page">
      <h1 className="mb-2 text-3xl font-bold text-slate-900" data-testid="test-strategy-heading">
        Test Strategy
      </h1>
      <p className="mb-8 text-slate-500">
        Recommended testing approaches for this QA testbed application.
      </p>

      <div className="space-y-4">
        {strategies.map((strategy) => (
          <article
            key={strategy.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            data-testid={`strategy-card-${strategy.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <h2 className="mb-2 text-lg font-semibold text-slate-900">{strategy.title}</h2>
            <p className="mb-3 text-sm text-slate-600">{strategy.description}</p>
            <div className="flex flex-wrap gap-2">
              {strategy.testIds.map((id) => (
                <code
                  key={id}
                  className="rounded bg-slate-100 px-2 py-1 text-xs text-indigo-700"
                  data-testid={`strategy-testid-${id}`}
                >
                  {id}
                </code>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
