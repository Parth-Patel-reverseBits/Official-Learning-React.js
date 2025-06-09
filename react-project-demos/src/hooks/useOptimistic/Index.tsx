import NormalListDemo from "./components/NormalListDemo/NormalListDemo";
import OptimisticListDemo from "./components/useOptimisticListDemo/OptimisticListDemo";
import NavigationButton from "../../GlobalComponents/NavigationButton";
const Index = () => {
  return (
    <div className="text-3xl text-center font-semibold mt-20">
      useOptimistic hook demo
      <div className="flex justify-between px-40 mt-20">
        <NormalListDemo />
        <OptimisticListDemo />
      </div>
      <div>
        <NavigationButton left="left" path="/use-memo">
          Go to previous page
        </NavigationButton>
        <NavigationButton path="">Go to next page</NavigationButton>
      </div>
    </div>
  );
};

export default Index;
