import TaskInput from "./components/TaskInput";
import Button from "./components/Button";
import { useState } from "react";
import { TasksProvider } from "./Context/TaskContext";
import TaskLists from "./components/TaskLists";
const Index = () => {
  const [text, setText] = useState<string>("");
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">
        Daily routine tasks
      </h1>
      <TasksProvider>
        <div className="flex gap-3 items-center justify-center mt-5 ">
          <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center justify-around px-3 py-4 rounded-[10px] w-[50%]">
            <TaskInput setText={setText} />
            <Button text={text} />
          </div>
        </div>
        <TaskLists />
      </TasksProvider>
    </div>
  );
};

export default Index;
