import { useState, useCallback, useMemo } from 'react'

export const useInput = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)
  const updateInputHandler = useCallback(event => { setValue(event.target.value) }, [])
  return [value, updateInputHandler, setValue]
}

export const useForm = () => {
  const [status, setStatus] = useState('ready')
  const [error, setError] = useState(null)

  const init = useCallback(() => setStatus('ready'), [])
  const start = useCallback(() => setStatus('processing'), [])
  const succeed = useCallback(() => setStatus('succeeded'), [])
  const fail = useCallback((error) => {
    setStatus('failed')
    if (error) setError(error)
  }, [])

  const isProcessing = useMemo(() => status === 'processing', [status])
  const isSucceeded = useMemo(() => status === 'succeeded', [status])
  const isFailed = useMemo(() => status === 'failed', [status])

  return {
    init,
    start,
    succeed,
    fail,
    error,
    isProcessing,
    isSucceeded,
    isFailed
  }
}
