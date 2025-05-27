import { useTasksDispatch } from "../Context/TaskContext";

const Buttons = ({ text }) => {
  const dispatch = useTasksDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
        className="bg-[#3376F2] text-white px-4 py-2 rounded-[5px] font-bold cursor-pointer"
      >
        ✚ Add
      </button>
    </div>
  );
};
let nextId = 3;

export default Buttons;
