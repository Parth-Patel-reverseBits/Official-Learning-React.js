import React from "react";

interface CountProps {
  text: string;
  count: number;
}

const Count: React.FC<CountProps> = ({ text, count }) => {
  console.log("Rendering " + text);
  return (
    <div className="text-center">
      {text} - {count}
    </div>
  );
};

export default React.memo(Count);
