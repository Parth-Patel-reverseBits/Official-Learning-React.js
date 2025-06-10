import NavigationButton from "./GlobalComponents/NavigationButton";

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center font-bold text-4xl ">
        Welcome To React.js Hooks Demos
      </div>
      <div></div>
      <NavigationButton path="/use-action-state">
        Go to next page
      </NavigationButton>
    </>
  );
};

export default HomePage;
