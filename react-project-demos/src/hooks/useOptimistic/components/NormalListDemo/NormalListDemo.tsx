import { useState } from "react";

const NormalListDemo = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleOnChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnClickEvent = () => {
    setList([inputValue, ...list]);
    setInputValue("");
  };

  const handleEnterKeyActivityEvent = (e) => {
    if (e.keyCode === 13) {
      handleOnClickEvent();
    }
  };

  return (
    <div>
      <div className="text-[18px] mt-10">
        <input
          value={inputValue}
          className="focus:outline-0 border-2 px-3 py-[6px] rounded-[5px]"
          type="text"
          onChange={(e) => handleOnChangeInputValue(e)}
          onKeyDown={(e) => handleEnterKeyActivityEvent(e)}
        />
        <button
          onClick={handleOnClickEvent}
          className="border-1 px-3 py-2 bg-black text-white rounded-[5px] cursor-pointer"
        >
          Add to list
        </button>
      </div>
      <div>
        {list.map((item, index) => {
          return (
            <li key={index} className="list-none">
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default NormalListDemo;
