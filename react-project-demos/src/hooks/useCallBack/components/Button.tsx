import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  console.log(children + " button component is rendered...!");
  return (
    <div className="text-center">
      <button
        className="bg-blue-500 text-white rounded-[10px] px-2 py-2 cursor-pointer mb-3"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
