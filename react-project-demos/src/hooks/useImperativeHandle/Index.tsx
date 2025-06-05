import { useRef } from "react";
import ChildrenCounter from "./components/ChildrenCounter";
import type { CounterHandle } from "./Types/types";
import NavigationButton from "../../GlobalComponents/NavigationButton";

const Index = () => {
  const ref = useRef<CounterHandle>(null);

  return (
    <div>
      <h1 className="mt-20 text-3xl text-center font-semibold">
        useImperativeHandle hook demo
      </h1>
      <ChildrenCounter ref={ref} />
      <div className="flex justify-center">
        <button
          onClick={() => ref.current?.handleReset()}
          className={`active:scale-[0.9] transition duration-150 mt-5 bg-blue-700 text-white px-3 py-1 rounded-[3px] cursor-pointer`}
        >
          Reset ⟳
        </button>
      </div>
      <NavigationButton left="left" path="/use-ref">
        Go to previous page
      </NavigationButton>
      <NavigationButton path="/use-insertion-effect">
        Go to next page
      </NavigationButton>
    </div>
  );
};

export default Index;
