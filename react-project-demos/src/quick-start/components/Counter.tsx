import { useState } from "react";
import CounterButton from "./CounterButton";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleOnClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3 className="font-bold">Sharing data between components</h3>
      <CounterButton counter={counter} onClick={handleOnClick} />
      <CounterButton counter={counter} onClick={handleOnClick} />
    </div>
  );
};

export default Counter;
