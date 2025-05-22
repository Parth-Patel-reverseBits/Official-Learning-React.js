const Button = ({ accordianNumber, indexNumber, setAccordianNumber }) => {
  return (
    <div>
      <button
        onClick={() => setAccordianNumber(indexNumber)}
        className="bg-blue-600 text-white px-2.5 py-1 cursor-pointer mt-2 mb-2"
      >
        Show
      </button>
    </div>
  );
};

export default Button;
