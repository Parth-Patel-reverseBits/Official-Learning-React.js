import Container from "./components/Container";
import Heading from "./components/Heading";

const Index = () => {
  return (
    <div className=" bg-[#5C76E4] w-[100%]  text-white min-h-screen">
      <Heading />
      <div className="flex justify-center items-center min-h-[94vh]">
        <Container />
      </div>
    </div>
  );
};

export default Index;
