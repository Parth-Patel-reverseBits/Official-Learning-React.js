const TaskInput = ({ setText }) => {
  return (
    <div className="w-[80%]">
      <input
        onChange={(e) => setText(e.target.value)}
        className="border-2 p-1 rounded-[5px] w-[100%]"
        type="text"
        placeholder="Enter a task"
      />
    </div>
  );
};

export default TaskInput;
