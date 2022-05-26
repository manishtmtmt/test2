import React, { useState } from "react";

const Todo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Todo {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default Todo;
