//REDUCER

const initialState = {
  logged: false,
  user: null,
};
const logging = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        logged: false,
        user: null,
      };
    default:
      return state;
  }
};

export default logging;
