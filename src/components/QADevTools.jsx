import { useState } from 'react'
import { useQADevTools } from '../context/QADevToolsContext'

function ToggleSwitch({ enabled, onChange, testId, label }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3" data-testid={testId}>
      <span className="text-sm text-slate-700">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={label}
        onClick={() => onChange(!enabled)}
        className={`relative h-6 w-11 rounded-full transition-colors ${
          enabled ? 'bg-indigo-600' : 'bg-slate-300'
        }`}
        data-testid={`${testId}-switch`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </label>
  )
}

export default function QADevTools() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    networkDelay,
    setNetworkDelay,
    simulate500Error,
    setSimulate500Error,
    triggerAutofill,
  } = useQADevTools()

  return (
    <div className="fixed right-4 bottom-4 z-[60]" data-testid="qa-dev-tools-container">
      {isOpen && (
        <div
          className="mb-3 w-80 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 text-white shadow-2xl"
          data-testid="qa-dev-tools-drawer"
        >
          <div className="border-b border-slate-700 px-4 py-3">
            <h3 className="text-sm font-semibold" data-testid="qa-dev-tools-heading">
              QA Dev Tools
            </h3>
            <p className="mt-0.5 text-xs text-slate-300">
              Simulate network conditions and pre-fill checkout data.
            </p>
          </div>

          <div className="space-y-4 px-4 py-4">
            <ToggleSwitch
              enabled={networkDelay}
              onChange={setNetworkDelay}
              testId="qa-network-delay-toggle"
              label="3-second network delay"
            />
            <ToggleSwitch
              enabled={simulate500Error}
              onChange={setSimulate500Error}
              testId="qa-500-error-toggle"
              label="500 error on checkout"
            />

            <div className="border-t border-slate-700 pt-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-300">
                Payment Autofill
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => triggerAutofill('valid')}
                  className="flex-1 rounded-lg bg-green-600 px-3 py-2 text-xs font-medium text-white hover:bg-green-700"
                  data-testid="qa-autofill-valid-button"
                >
                  Valid Details
                </button>
                <button
                  type="button"
                  onClick={() => triggerAutofill('invalid')}
                  className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-xs font-medium text-white hover:bg-red-700"
                  data-testid="qa-autofill-invalid-button"
                >
                  Invalid Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-slate-700"
        data-testid="qa-dev-tools-toggle"
        aria-expanded={isOpen}
        aria-label="Toggle QA Dev Tools"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        QA Dev Tools
      </button>
    </div>
  )
}
