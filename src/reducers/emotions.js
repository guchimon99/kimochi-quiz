export const emotionsReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD': {
      const { emotions } = action.payload
      return emotions
    }
    default:
      return state
  }
}
