export const initialState = {
    user: null
  }
  
  export const actionTypes = {
    SET_USER: "SET_USER"
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case action.type:
        return {
          ...state,
          user: action.user
        }
      default:
        return state
    }
  }
  
  export default reducer;
  