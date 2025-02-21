import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount((prev) => prev + value);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => handleClick(1)}>Increment</button>
      <button onClick={() => handleClick(-1)}>Decrement</button>
    </div>
  );
}
