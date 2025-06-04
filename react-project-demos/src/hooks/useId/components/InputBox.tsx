import { useId } from "react";

interface childrenProps {
  children: string;
}

const InputBox = ({ children }: childrenProps) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{children}:</label>
      {"   "}
      <input className="border-2 rounded-[5px] px-3 py-1" type="text" id={id} />
    </div>
  );
};

export default InputBox;
