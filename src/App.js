import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment_count, decrement_count } from "./store/action";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((store) => {
    return store.calculatorReducer.count;
  });
  return (
    <div className="App">
      <h1>Counter app With Redux</h1>
      <h2>Count:{count}</h2>
      <div>
        <button
          disabled={count < 1}
          onClick={() => dispatch(decrement_count(1))}
        >
          -
        </button>
        <button onClick={() => dispatch(increment_count(1))}>+</button>
        <button onClick={() => dispatch(increment_count(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default App;
