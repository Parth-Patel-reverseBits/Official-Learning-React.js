import UseCaseLiveFilter from "./components/useCaseLiveFilter";
import NavigationButton from "../../GlobalComponents/NavigationButton";

const Index = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl mt-10 mb-10">
        useEffect hook demo
      </h1>
      <UseCaseLiveFilter />
      <div className="w-[16%] mb-10 ml-10">
        <NavigationButton position="static" left="left" path="/use-id">
          Go to previous page
        </NavigationButton>
      </div>
    </div>
  );
};

export default Index;
