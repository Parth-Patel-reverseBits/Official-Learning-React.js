interface ChildrenProps {
  children: React.ReactNode;
  color: string;
  onClick: () => void;
}

const Buttons = ({ children, color, onClick }: ChildrenProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${
          color === "primary" ? "bg-blue-500" : "bg-yellow-500"
        } text-white px-2.5 py-2.5 rounded-[3px]`}
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;
