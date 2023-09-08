import { useState } from "react";
import "./App.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Function to increment the counter
  function IncrementCounter() {
    setCount(count + 1);
  }

  // Function to decrement the counter
  function DecrementCounter() {
    setCount(count - 1);
  }

  return (
    <div className="app">
      <div className="count-section">
        <div className="count">COUNT:{count}</div>
        <div className="btn-section">
          <button onClick={IncrementCounter}>+</button>
          <button onClick={DecrementCounter}>-</button>
        </div>
      </div>
    </div>
  );
}
