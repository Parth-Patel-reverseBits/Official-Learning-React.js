import NormalGlobalState from "./components/NormalGlobalState/NormalGlobalState";
import UseSyncExternelStoreState from "./components/useSyncExternelStoreState/UseSyncExternelStoreState";
import NavigationButton from "../../GlobalComponents/NavigationButton";

const Index = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-20">
        useSyncExternelStore hook demo
      </h1>
      <div className="flex justify-between px-30 mt-30">
        <NormalGlobalState />
        <UseSyncExternelStoreState />
      </div>
      <NavigationButton left="left" path="/use-optimistic">
        Go to previous page
      </NavigationButton>
      <NavigationButton path="">Go to next page</NavigationButton>
    </div>
  );
};

export default Index;
