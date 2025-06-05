import { useRef } from "react";
import ChildrenCounter from "./components/ChildrenCounter";
import type { CounterHandle } from "./Types/types";

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
    </div>
  );
};

export default Index;
