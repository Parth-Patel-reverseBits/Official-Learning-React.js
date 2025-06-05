import { useEffect, useRef, useState } from "react";
import NavigationButton from "../../GlobalComponents/NavigationButton";

const Index = () => {
  const [text, setText] = useState<string>("");
  const renderValue = useRef("");

  useEffect(() => {
    renderValue.current = text;
  }, [text]);

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-20">
        useRef hook demo
      </h1>
      <div className="flex justify-center mt-10">
        <div className="w-[30%]  flex flex-col">
          <input
            onChange={(e) => setText(e.target.value)}
            className="border-2 focus:outline-0 block rounded-3xl px-3 py-1"
            type="text"
          />
          This is my current name {text} and it is the name it should be{" "}
          {renderValue.current}
        </div>
      </div>
      <NavigationButton left="left" path="/use-effect">
        Go to previous page
      </NavigationButton>
      <NavigationButton path="/use-imperative-handle">
        Go to next page
      </NavigationButton>
    </div>
  );
};

export default Index;
