import NormalGlobalState from "./components/NormalGlobalState/NormalGlobalState";
import UseSyncExternelStoreState from "./components/useSyncExternelStoreState/UseSyncExternelStoreState";
const Index = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-20">
        useSyncExternelStore hook demo
      </h1>
      <div className="flex justify-between px-30">
        <NormalGlobalState />
        <UseSyncExternelStoreState />
      </div>
    </div>
  );
};

export default Index;
