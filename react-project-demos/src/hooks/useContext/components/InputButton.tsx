import { useContext } from "react";
import { ThemeContext } from "../Index";

const InputButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="mt-3">
      <label htmlFor="themeChange">
        <input
          onChange={() => {
            return theme === "light" ? setTheme("dark") : setTheme("light");
          }}
          type="checkbox"
          id="themeChange"
        />
        {"   "}Change Theme
      </label>
    </div>
  );
};

export default InputButton;
