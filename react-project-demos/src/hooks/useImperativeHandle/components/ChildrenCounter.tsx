import { useImperativeHandle, useState } from "react";

const ChildrenCounter = ({ ref }) => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => {
      if (count > 0) {
        return count - 1;
      } else {
        return count;
      }
    });
  };

  const handleReset = () => {
    setCount(0);
  };
  useImperativeHandle(ref, () => ({
    handleReset,
  }));

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="text-3xl mb-5">{count}</div>
      <div className="flex gap-5">
        <button
          onClick={handleIncrement}
          className="bg-blue-700 active:scale-[0.9] transition duration-150 text-white px-3 py-1 rounded-[3px] cursor-pointer"
        >
          Increment ✚
        </button>
        <button
          onClick={handleDecrement}
          className="bg-blue-700 active:scale-[0.9] transition duration-150 text-white px-3 py-1 rounded-[3px] cursor-pointer"
        >
          Decrement ━
        </button>
      </div>
    </div>
  );
};

export default ChildrenCounter;
