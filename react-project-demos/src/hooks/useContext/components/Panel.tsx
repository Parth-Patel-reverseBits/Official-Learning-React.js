import Title from "./Title";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import { useContext } from "react";
import { ThemeContext } from "../Index";

const Panel = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        className={`border-2 p-2 rounded-[3px] ${
          theme === "dark" ? "bg-black text-white" : "bg-white"
        }`}
      >
        <Title />
        <div className="flex gap-10 justify-center mt-10">
          <SignInButton />
          <SignUpButton />
        </div>
      </div>
    </div>
  );
};

export default Panel;
