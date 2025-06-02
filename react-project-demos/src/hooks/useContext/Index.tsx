import { createContext, useState } from "react";
import InputButton from "./components/InputButton";
import Panel from "./components/Panel";
import NavigationButton from "../../GlobalComponents/NavigationButton";
type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const Index = () => {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="absolute top-20 font-semibold text-3xl">
            useContext hook
          </h1>
          <div>
            <Panel />
            <InputButton />
          </div>
        </div>
      </ThemeContext.Provider>
      <NavigationButton left="left" path="/use-callback">
        Go to previous page
      </NavigationButton>
      <NavigationButton path="/use-debug-value">
        Go to next page
      </NavigationButton>
    </>
  );
};
export default Index;
