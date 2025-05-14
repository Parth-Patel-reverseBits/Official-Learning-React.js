interface Props {
  counter: number;
  onClick: () => void;
}

const CounterButton = (props: Props) => {
  const { counter, onClick } = props;

  return (
    <div>
      <button
        className="bg-emerald-700 text-white mb-3 mt-3 cursor-pointer p-2.5 rounded-[3px] hover:bg-emerald-500 transition-all duration-300"
        onClick={onClick}
      >
        Button {counter}
      </button>
    </div>
  );
};

export default CounterButton;
