export const usersReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD': {
      const { users } = action.payload
      return users
    }
    case 'SET': {
      const { user } = action.payload
      return {
        ...state,
        [user.id]: user
      }
    }
    case 'UNSET': {
      const newState = { ...state }
      const { user } = action.payload
      delete newState[user.id]
      return newState
    }
    default:
      return state
  }
}
