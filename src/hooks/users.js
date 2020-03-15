import { useMemo, useContext, useCallback, useReducer } from 'react'
import { UsersContext } from '../providers/users'
import { usersReducer } from '../reducers/users'
import * as storage from '../utilities/storage'
import { STORAGE_KEY_USERS } from '../constants'

const newID = (() => {
  return () => new Date().getTime()
})()

export const useUsersProvider = () => {
  const value = useReducer(usersReducer, null)
  return value
}

export const useUsers = () => {
  const [users] = useContext(UsersContext)
  return users
}

export const useUsersAsArray = () => {
  const [users] = useContext(UsersContext)
  const usersArray = useMemo(() => users ? Object.values(users) : null, [users])
  return usersArray
}

export const useUser = id => {
  const [users] = useContext(UsersContext)
  const user = users[id]
  return user
}

export const useSaveUsers = () => {
  return useCallback(users => {
    storage.save(STORAGE_KEY_USERS, users)
  }, [])
}

export const useLoadUsers = () => {
  const dispatch = useContext(UsersContext)[1]
  return useCallback(() => {
    const defaultUsers = []
    const loadedUsers = storage.load(STORAGE_KEY_USERS)
    const users = loadedUsers || defaultUsers
    dispatch({ type: 'LOAD', payload: { users } })
  }, [dispatch])
}

export const useAddUser = () => {
  const dispatch = useContext(UsersContext)[1]
  return useCallback(user => {
    user.id = newID()
    dispatch({
      type: 'SET',
      payload: { user }
    })
  }, [dispatch])
}

export const useRemoveUser = () => {
  const dispatch = useContext(UsersContext)[1]
  return useCallback(user => {
    if (!window.confirm(`${user.displayName}をけしていいですか？`)) return

    dispatch({
      type: 'UNSET',
      payload: { user }
    })
  }, [dispatch])
}

export const useUpdateUser = () => {
  const dispatch = useContext(UsersContext)[1]
  return useCallback(user => {
    dispatch({
      type: 'SET',
      payload: { user }
    })
  }, [dispatch])
}
