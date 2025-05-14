import ComponentsAndNesting from "./components/ComponentsAndNesting";
import DisplayData from "./components/DisplayData";
import ConditionalRendring from "./components/ConditionalRendring";
import RendringLists from "./components/RendringLists";
import Counter from "./components/Counter";
const Index = () => {
  return (
    <div>
      <h1 className="text-4xl mb-10 mt-5">Welcome to my react app</h1>
      <ComponentsAndNesting />
      <DisplayData />
      <ConditionalRendring />
      <RendringLists />
      <Counter />
    </div>
  );
};

export default Index;
