import NavigationButton from "./GlobalComponents/NavigationButton";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center font-bold text-4xl ">
        Welcome To Hooks Demos
      </div>
      <NavigationButton path="/use-action-state" />
    </>
  );
};

export default HomePage;
