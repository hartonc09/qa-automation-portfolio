import { useEffect, useState } from 'react'
import { useQADevTools, VALID_PAYMENT, INVALID_PAYMENT } from '../context/QADevToolsContext'

function validateCheckoutForm(form) {
  const errors = {}

  if (!form.name.trim()) errors.name = 'Full name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Invalid email format'
  if (!form.address.trim()) errors.address = 'Shipping address is required'
  if (!/^\d{16}$/.test(form.cardNumber.replace(/\s/g, '')))
    errors.cardNumber = 'Card number must be 16 digits'
  if (!/^\d{2}\/\d{2}$/.test(form.cardExpiry)) errors.cardExpiry = 'Expiry must be MM/YY'
  if (!/^\d{3,4}$/.test(form.cardCvv)) errors.cardCvv = 'CVV must be 3 or 4 digits'

  return errors
}

export default function CheckoutForm({ onSuccess }) {
  const { autofillTrigger, clearAutofillTrigger, simulateNetworkRequest } = useQADevTools()
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  })
  const [fieldErrors, setFieldErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!autofillTrigger) return

    const data = autofillTrigger.type === 'valid' ? VALID_PAYMENT : INVALID_PAYMENT
    setForm(data)
    setFieldErrors({})
    setSubmitError('')
    clearAutofillTrigger()
  }, [autofillTrigger, clearAutofillTrigger])

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }))
    setSubmitError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validateCheckoutForm(form)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      await simulateNetworkRequest(async () => {
        await new Promise((resolve) => setTimeout(resolve, 500))
        return { orderId: `ORD-${Date.now()}` }
      })
      onSuccess?.()
    } catch (err) {
      setSubmitError(err.message || 'Checkout failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="checkout-form">
      <h3 className="text-lg font-semibold text-slate-900" data-testid="checkout-heading">
        Checkout
      </h3>

      <div>
        <label htmlFor="checkout-name" className="mb-1 block text-sm font-medium text-slate-700">
          Full Name
        </label>
        <input
          id="checkout-name"
          type="text"
          value={form.name}
          onChange={handleChange('name')}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          data-testid="checkout-name-input"
        />
        {fieldErrors.name && (
          <p className="mt-1 text-xs text-red-600" data-testid="checkout-name-error">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="checkout-email" className="mb-1 block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="checkout-email"
          type="email"
          value={form.email}
          onChange={handleChange('email')}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          data-testid="checkout-email-input"
        />
        {fieldErrors.email && (
          <p className="mt-1 text-xs text-red-600" data-testid="checkout-email-error">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="checkout-address" className="mb-1 block text-sm font-medium text-slate-700">
          Shipping Address
        </label>
        <input
          id="checkout-address"
          type="text"
          value={form.address}
          onChange={handleChange('address')}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          data-testid="checkout-address-input"
        />
        {fieldErrors.address && (
          <p className="mt-1 text-xs text-red-600" data-testid="checkout-address-error">
            {fieldErrors.address}
          </p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <label
            htmlFor="checkout-card-number"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Card Number
          </label>
          <input
            id="checkout-card-number"
            type="text"
            inputMode="numeric"
            value={form.cardNumber}
            onChange={handleChange('cardNumber')}
            placeholder="4111111111111111"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            data-testid="checkout-card-number-input"
          />
          {fieldErrors.cardNumber && (
            <p className="mt-1 text-xs text-red-600" data-testid="checkout-card-number-error">
              {fieldErrors.cardNumber}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="checkout-card-expiry"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Expiry
          </label>
          <input
            id="checkout-card-expiry"
            type="text"
            value={form.cardExpiry}
            onChange={handleChange('cardExpiry')}
            placeholder="MM/YY"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            data-testid="checkout-card-expiry-input"
          />
          {fieldErrors.cardExpiry && (
            <p className="mt-1 text-xs text-red-600" data-testid="checkout-card-expiry-error">
              {fieldErrors.cardExpiry}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="checkout-card-cvv" className="mb-1 block text-sm font-medium text-slate-700">
          CVV
        </label>
        <input
          id="checkout-card-cvv"
          type="text"
          inputMode="numeric"
          value={form.cardCvv}
          onChange={handleChange('cardCvv')}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          data-testid="checkout-card-cvv-input"
        />
        {fieldErrors.cardCvv && (
          <p className="mt-1 text-xs text-red-600" data-testid="checkout-card-cvv-error">
            {fieldErrors.cardCvv}
          </p>
        )}
      </div>

      {submitError && (
        <div
          className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
          data-testid="checkout-error-message"
          role="alert"
        >
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        data-testid="checkout-submit-button"
      >
        {isSubmitting ? 'Processing...' : 'Place Order'}
      </button>
    </form>
  )
}
