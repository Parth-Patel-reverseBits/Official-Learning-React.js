import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

const Index = () => {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>
          <Panel />
          <InputButton />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
export default Index;

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

const Title = () => {
  return <h1>Welcome</h1>;
};

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

const SignInButton = () => {
  return (
    <button className="bg-[#FF4136] text-white px-2 py-1 rounded-[3px] cursor-pointer">
      Sign In
    </button>
  );
};

const SignUpButton = () => {
  return (
    <button className="bg-gray-400 text-white px-2 py-1 rounded-[3px] cursor-pointer">
      Sign Up
    </button>
  );
};
