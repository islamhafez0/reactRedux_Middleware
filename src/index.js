import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
import reducers from "./store/reducer";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
// import axios from "axios";
import thunk from "redux-thunk";


// const midddleWare = (store) => {
//   return (next) => { 
//     return (action) => {
//       console.log('Middleware', action);
//       console.log('Middleware', store.getState())
//     }
//   }
// }

// const fetchDataUsingMiddleware = (store) => (next) => async (action) => {
//   if(action.type === 'LOGIN') {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//     action.payload = response.data[0].name
//   }
//   return next(action)
// }  


let store = createStore(
  reducers,
  applyMiddleware(thunk)
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
