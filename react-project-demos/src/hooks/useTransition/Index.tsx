import IssueHookDemo from "./components/IssueHookDemo";
import SolvedIssueHookDemo from "./components/SolvedIssueHookDemo";
import NavigationButton from "../../GlobalComponents/NavigationButton";
const Index = () => {
  return (
    <div>
      <h1 className="font-semibold text-center text-3xl mt-20">
        useTransition hook demo
      </h1>
      <div className="flex items-center justify-around mt-20 relative">
        <IssueHookDemo />
        <SolvedIssueHookDemo />
      </div>
      <NavigationButton left="left" path="/use-sync-external-store">
        Go to previous page
      </NavigationButton>
    </div>
  );
};

export default Index;
