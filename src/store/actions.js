//ACTION
import axios from "axios";
const increment = (num) => {
  return {
    type: "INC",
    payload: num ? num : 1,
  };
};
const decrement = (num) => {
  return {
    type: "DEC",
    payload: num ? num : 1,
  };
};
const login = () => {
  return async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return dispatch({
      type: "LOGIN",
      payload: response.data[0].name
    })
  }
};
const logout = () => {
  return {
    type: "LOGOUT",
  };
};
export { increment, decrement, login, logout };
