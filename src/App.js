import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./store/actions";

function App() {
  const count = useSelector((state) => state.counter.count);
  const isLogged = useSelector((state) => state.logged.logged);
  const user = useSelector((state) => state.logged.user);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <header>
        <div> {count} </div>
        {isLogged ? (
          <button onClick={() => dispatch(logout())}> logout </button>
        ) : (
          <button onClick={() => dispatch(login())}> login </button>
        )}
      </header>
      <div className="counter">
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(increment(3))}> + 3 </button>
        <button onClick={() => dispatch(decrement())}> - </button>
      </div>
      {user ? <h2 className="center"> Hello {user} </h2> : null}
    </div>
  );
}

export default App;
