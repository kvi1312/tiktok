import React, { useEffect, useState } from "react";

const Content2 = () => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  useEffect
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Click me!</button>
    </div>
  );
};

export default Content2;