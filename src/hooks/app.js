import { useEffect, useMemo } from 'react'
import { useEmotions, useLoadEmotions } from './emotions'
import { useUsers, useLoadUsers } from './users'

export const useInit = () => {
  const loadUsers = useLoadUsers()
  const loadEmotions = useLoadEmotions()
  useEffect(() => {
    loadUsers()
    loadEmotions()
  }, [loadUsers, loadEmotions])
}

export const useIsReady = () => {
  const emotions = useEmotions()
  const users = useUsers()
  return useMemo(() => {
    return emotions !== null && users !== null
  }, [emotions, users])
}
