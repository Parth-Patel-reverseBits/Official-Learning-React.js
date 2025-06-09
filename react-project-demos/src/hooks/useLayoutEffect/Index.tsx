import { useEffect, useRef, useState } from "react";
import NavigationButton from "../../GlobalComponents/NavigationButton";

const Index = () => {
  const [show, setShow] = useState(false);
  const popup = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    if (popup.current === null || button.current === null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <div>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
      <NavigationButton left="left" path="/use-insertion-effect">
        Go to previous page
      </NavigationButton>
      <NavigationButton path="/use-memo">Go to next page</NavigationButton>
    </div>
  );
};

export default Index;
