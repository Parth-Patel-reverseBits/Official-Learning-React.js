import DateGenerator from "./DateGenerator";
import AddTaskButton from "./AddTaskButton";

const Container = () => {
  return (
    <div className="w-[500px] bg-white h-[500px] rounded-[30px]">
      <div className="mt-5 flex justify-around  h-fit  items-center">
        <DateGenerator />
        <AddTaskButton />
      </div>
    </div>
  );
};

export default Container;
