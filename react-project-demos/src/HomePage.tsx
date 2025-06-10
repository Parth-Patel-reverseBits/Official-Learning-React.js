import NavigationButton from "./GlobalComponents/NavigationButton";
import reactLogo from "./assets/react.svg";
import "./index.css";
const HomePage = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center font-bold text-4xl ">
        Welcome To React.js Hooks Demos
        <div className="absolute top-50">
          <img src={reactLogo} className="w-20" alt="" id="reactLogo-image" />
        </div>
      </div>
      <NavigationButton path="/use-action-state">
        Go to next page
      </NavigationButton>
    </>
  );
};

export default HomePage;
