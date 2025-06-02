import { useId } from "react";

const InputBox = ({ children }) => {
  return (
    <div>
      <label htmlFor="email">{children}:</label>
      {"   "}
      <input
        className="border-2 rounded-[5px] px-3 py-1"
        type="text"
        id="email"
      />
    </div>
  );
};

export default InputBox;
