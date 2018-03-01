export function isLoading(state, action) {
  return { ...state, isLoading: action.isLoading };
}

export function hasErrored(state, action) {
  return { ...state, hasErrored: action.hasErrored };
}