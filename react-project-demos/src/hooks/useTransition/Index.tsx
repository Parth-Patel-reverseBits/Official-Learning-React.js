import IssueHookDemo from "./components/IssueHookDemo";
import SolvedIssueHookDemo from "./components/SolvedIssueHookDemo";
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
    </div>
  );
};

export default Index;
