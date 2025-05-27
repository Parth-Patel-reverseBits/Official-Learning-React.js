import { useState } from "react";
import { useTasks, useTasksDispatch } from "../Context/TaskContext";

const TaskLists = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [inputChange, setInputChange] = useState("");

  return (
    <div className="flex flex-col justify-center items-center mt-10  w-[100%]">
      <ul className=" w-[100%] flex flex-col justify-center items-center">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="hover:scale-[1.03] transition duration-300 flex justify-between items-center gap-5 mb-5  p-3 w-[50%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px]"
          >
            <div className="flex items-center w-[60%]">
              <input
                type="checkbox"
                checked={task.done}
                onChange={(e) =>
                  dispatch({
                    type: "changed",
                    task: { ...task, done: e.target.checked },
                  })
                }
              />
              {"   "}
              {editingTaskId === task.id ? (
                <input
                  type="text"
                  className="ml-2 border-2 rounded-[5px] w-[100%] border-gray-300 p-1"
                  value={inputChange}
                  onChange={(e) => setInputChange(e.target.value)}
                />
              ) : (
                <span className={task.done ? "line-through ml-2" : "ml-2"}>
                  {task.text}
                </span>
              )}
            </div>

            <div className="flex justify-end gap-4">
              {editingTaskId === task.id ? (
                <button
                  className="cursor-pointer border-2 bg-green-600 text-white px-3 py-2 rounded-[5px]"
                  onClick={() => {
                    dispatch({
                      type: "changed",
                      task: { ...task, text: inputChange },
                    });
                    setEditingTaskId(null);
                  }}
                >
                  ✅ Save
                </button>
              ) : (
                <button
                  className="cursor-pointer border-2 transition duration-200 hover:bg-blue-600 hover:text-white px-3 py-2 rounded-[5px]"
                  onClick={() => {
                    setEditingTaskId(task.id);
                    setInputChange(task.text);
                  }}
                >
                  ✏️ Edit
                </button>
              )}

              <button
                className="cursor-pointer border-2 hover:bg-red-600 hover:text-white px-3 py-2 rounded-[5px]"
                onClick={() =>
                  dispatch({
                    type: "deleted",
                    id: task.id,
                  })
                }
              >
                🗑 Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskLists;
