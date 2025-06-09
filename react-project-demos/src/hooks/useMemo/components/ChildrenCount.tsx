import { useRef } from "react";

interface ChildrenCountProps {
  parentCount: number;
}

const ChildrenCount = ({ parentCount }: ChildrenCountProps) => {
  const ref = useRef(0);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="text-[18px]">
          This is the children count component:{" "}
          <span className="text-blue-800 font-semibold"> {ref.current++}</span>
        </div>
        <div className="text-[18px]">My name is: {}</div>
      </div>
    </div>
  );
};

export default ChildrenCount;
