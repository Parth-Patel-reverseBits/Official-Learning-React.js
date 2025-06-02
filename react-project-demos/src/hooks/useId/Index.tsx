import InputBox from "./components/InputBox";
import InputBoxIssue from "./components/InputBoxIssue";
const Index = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mt-20">
        useID hook demo
      </h1>
      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <p>Issued input boxs</p>
        <InputBoxIssue>Email</InputBoxIssue>
        <InputBoxIssue>Name</InputBoxIssue>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mt-20">
        <p>Fixed input boxs</p>
        <InputBox>Email</InputBox>
        <InputBox>Name</InputBox>
      </div>
    </div>
  );
};

export default Index;
