export const initialState = {
  builds: {
    'AHO': false,
    'CEO': false,
    'CER': false,
    'COC': false,
    'CRA': false,
    'URG': false,
    'USF': false,
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BUILD':
      state.builds[action.build.buildName] = action.build.visited
      return state
    case 'RESET':
      for (const b of Object.entries(state.builds)) {
        state.builds[b[0]] = false
      }
      return state
    default:
      return state
  }
}
