import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const AddTaskButton = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  window.addEventListener("resize", (event) => {
    // windowHeight = event.target.outerHeight;
    // windowWidth = event.target.outerWidth;
    setWindowWidth(event?.target?.outerWidth);
  });

  return (
    <div className="hover:cursor-pointer">
      {windowWidth < 768 ? (
        <BsFillPlusCircleFill color="#5C76E4" size={40} />
      ) : (
        <BsFillPlusCircleFill color="#5C76E4" size={50} />
      )}
    </div>
  );
};

export default AddTaskButton;
