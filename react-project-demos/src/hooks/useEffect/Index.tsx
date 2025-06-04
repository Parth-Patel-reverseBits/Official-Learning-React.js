import NavigationButton from "../../GlobalComponents/NavigationButton";
import UseCaseLiveFilter from "./components/useCaseLiveFilter";

const Index = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl mt-10 mb-10">
        useEffect hook demo
      </h1>
      <UseCaseLiveFilter />
      <div className="flex justify-between">
        <div className="w-[16%] mb-10 ml-10">
          <NavigationButton position="static" left="left" path="/use-id">
            Go to previous page
          </NavigationButton>
        </div>
        <div className="w-[14%] mb-10 mr-10">
          <NavigationButton position="static" path="/use-ref">
            Go to next page
          </NavigationButton>
        </div>
      </div>
    </div>
  );
};

export default Index;
