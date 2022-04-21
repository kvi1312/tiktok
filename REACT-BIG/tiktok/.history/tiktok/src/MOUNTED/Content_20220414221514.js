import React, { useEffect, useState } from "react";

// 1. useEffect (callback)
//- gọi call back mỗi khi component re-render
//- gọi callback sau khi componet them elme
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
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default Content;