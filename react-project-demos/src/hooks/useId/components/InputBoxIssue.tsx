interface childrenProps {
  children: string;
}

const InputBox = ({ children }: childrenProps) => {
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
