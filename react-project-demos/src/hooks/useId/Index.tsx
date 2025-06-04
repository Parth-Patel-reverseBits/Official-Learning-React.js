import InputBox from "./components/InputBox";
import InputBoxIssue from "./components/InputBoxIssue";
import NavigationButton from "../../GlobalComponents/NavigationButton";
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
      <NavigationButton left="left" path="/Use-deferred-value">
        Go to previous page
      </NavigationButton>
      <NavigationButton path="/Use-effect">Go to next page</NavigationButton>
    </div>
  );
};

export default Index;
