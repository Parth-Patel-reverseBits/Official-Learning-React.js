import { useState } from "react";

const Counter = ({ isFancy }) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className={`p-2 border-2 ${isFancy ? `border-green-500` : null}`}>
      <p className="text-center text-3xl mb-1">{count}</p>
      <button
        className="bg-blue-500 p-2 text-white cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Add one
      </button>
    </div>
  );
};

export default Counter;
