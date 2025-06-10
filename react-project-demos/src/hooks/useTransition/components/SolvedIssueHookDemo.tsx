import { useState, useTransition } from "react";
import type { ChangeEvent } from "react";
const SolvedIssueHookDemo = () => {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const handleOnChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    startTransition(() => {
      const tempList: string[] = [];
      for (let i = 0; i < 10000; i++) {
        tempList.push(newValue);
      }
      setList(tempList);
    });
  };

  return (
    <div className="absolute top-0 end-50">
      <h1 className="font-semibold text-center text-[18px] mt-20">
        Solved issue with using useTransition hook
      </h1>
      <div className="flex justify-center mt-10">
        <input
          onChange={handleOnChangeValue}
          className="border-2 rounded-2xl px-3 py-1"
          type="text"
        />
      </div>
      {isPending && <div className="ml-30">Loading...</div>}
      <ul className="flex flex-col items-center">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SolvedIssueHookDemo;
