import Toolbar from "./components/Toolbar";

const Index = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl mt-10">Event Bubbling or Propagation Demo</h1>
        <Toolbar />
      </div>

      <div>
        <h1 className="text-3xl mt-10">Event Stop Propagation Demo</h1>
        <Toolbar stopPropagation={true} />
      </div>

      <div>
        <h1 className="text-3xl mt-10">Event Capturing Demo</h1>
        <Toolbar useCapture={true} />
      </div>
    </>
  );
};

export default Index;
