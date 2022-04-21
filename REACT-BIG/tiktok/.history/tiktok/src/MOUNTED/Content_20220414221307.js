import React, { useEffect, useState } from "react";

// 1. useEffect (callback)
//- gọi call back mỗi khi component re-render
// 2. useEffect (callback, [])
// 3. useEffect (callback, [deps])

//---------
// 1. callback luôn luôn được gọi sau khi component mounted
const Content = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("mouted");
  });
  return (
    <div>
      <h1>hi chào các bạn </h1>
    </div>
  );
};

export default Content;
