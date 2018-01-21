const auth = (state = { loading: true }, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        ...action.user
      }
    case 'LOGOUT':
      return {}
    case 'GET_PROFILE_DATA':
      return {
        ...state,
        ...action.payload
      }
    default:
     return state;
  }
}

export default auth;
