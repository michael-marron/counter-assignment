import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  return (
    <div>
      <h2>Counter</h2>
      <p data-testid="count">{count}</p>
      <button onClick={increment} data-testid="incrementButton"> + </button>
      <button onClick={decrement} data-testid="decrementButton"> - </button>
    </div>
  );
}
