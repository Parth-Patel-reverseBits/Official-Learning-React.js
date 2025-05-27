import Index from "./state-lifting-accordian/Index";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Index />
      <div className="flex justify-end">
        <Link
          to="/preserved-state"
          className="text-white px-2.5 py-1 mr-5 bg-green-500 w-fit mb-5"
        >
          Go to next page ➡️
        </Link>
      </div>
    </div>
  );
};

export default App;
