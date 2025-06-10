import { useState } from "react";
import type { ChangeEvent } from "react";

const IssueHookDemo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const handleOnChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const tempList: string[] = [];
    for (let ele = 0; ele < 10000; ele++) {
      tempList.push(newValue);
    }

    setList(tempList);
  };

  return (
    <div className="absolute top-0 start-50">
      <h1 className="font-semibold text-center text-[18px] mt-20">
        Issue without useTransition hook
      </h1>
      <div className="flex justify-center mt-10">
        <input
          onChange={handleOnChangeValue}
          className="border-2 rounded-2xl px-3 py-1"
          type="text"
        />
      </div>
      <ul className="flex flex-col items-center">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default IssueHookDemo;
