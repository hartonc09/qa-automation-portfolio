import { createContext, useContext, useState, useCallback } from 'react'

const QADevToolsContext = createContext(null)

export const VALID_PAYMENT = {
  name: 'Jane Tester',
  email: 'jane.tester@example.com',
  address: '123 QA Lane, Testville, TV 12345',
  cardNumber: '4111111111111111',
  cardExpiry: '12/28',
  cardCvv: '123',
}

export const INVALID_PAYMENT = {
  name: '',
  email: 'not-an-email',
  address: '',
  cardNumber: '1234',
  cardExpiry: '01/20',
  cardCvv: '99',
}

export function QADevToolsProvider({ children }) {
  const [networkDelay, setNetworkDelay] = useState(false)
  const [simulate500Error, setSimulate500Error] = useState(false)
  const [autofillTrigger, setAutofillTrigger] = useState(null)

  const simulateNetworkRequest = useCallback(
    async (operation) => {
      if (networkDelay) {
        await new Promise((resolve) => setTimeout(resolve, 3000))
      }

      if (simulate500Error) {
        throw new Error('Internal Server Error (500): Checkout service unavailable')
      }

      return operation()
    },
    [networkDelay, simulate500Error],
  )

  const triggerAutofill = useCallback((type) => {
    setAutofillTrigger({ type, timestamp: Date.now() })
  }, [])

  const clearAutofillTrigger = useCallback(() => {
    setAutofillTrigger(null)
  }, [])

  return (
    <QADevToolsContext.Provider
      value={{
        networkDelay,
        setNetworkDelay,
        simulate500Error,
        setSimulate500Error,
        autofillTrigger,
        triggerAutofill,
        clearAutofillTrigger,
        simulateNetworkRequest,
      }}
    >
      {children}
    </QADevToolsContext.Provider>
  )
}

export function useQADevTools() {
  const context = useContext(QADevToolsContext)
  if (!context) {
    throw new Error('useQADevTools must be used within QADevToolsProvider')
  }
  return context
}
