import { useState } from "react";
import ChildrenCount from "./components/ChildrenCount";
import NavigationButton from "../../GlobalComponents/NavigationButton";

const Index = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-20">
        useMemo hook demo
      </h1>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="text-[18px]">
          This is the parent count component:{" "}
          <span className="text-blue-800 font-semibold"> {count}</span>
        </div>
        <button
          className="mt-3  w-fit bg-blue-600 text-white px-3 py-1 rounded-[5px] cursor-pointer"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Click me
        </button>
      </div>
      <ChildrenCount parentCount={count} />
      <NavigationButton left="left" path="/use-layout-effect">
        Go to previous page
      </NavigationButton>
      <NavigationButton path="/use-optimistic">
        Go to next page
      </NavigationButton>
    </div>
  );
};

export default Index;
