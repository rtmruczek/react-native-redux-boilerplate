const initialState = {
  modal: null,
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
  case 'SHOW_MODAL':
    return {
      ...state,
      modal: action.payload,
    }
  default: return state
  }
}