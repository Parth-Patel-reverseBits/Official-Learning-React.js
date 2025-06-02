import useOnlineStatus from "./components/useOnlineStatus";
import NavigationButton from "../../GlobalComponents/NavigationButton";

const Index = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="border-1 h-screen flex flex-col justify-center items-center">
      <h1 className="absolute top-20 text-3xl font-semibold">
        useDebugValue hook
      </h1>
      <h3>Network Status Tracker</h3>
      <p>
        You are currently:{" "}
        <strong style={{ color: isOnline ? "green" : "red" }}>
          {isOnline ? "Online" : "Offline"}
        </strong>
      </p>
      <NavigationButton left="left" path="/use-context">
        Go to previous page
      </NavigationButton>
      <NavigationButton path="/Use-deferred-value">
        Go to next page
      </NavigationButton>
    </div>
  );
};

export default Index;
