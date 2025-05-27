import { useState } from "react";
import Counter from "./components/Counter";
import { Link } from "react-router-dom";
const Index = () => {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div className="flex-col h-screen w-full justify-center items-center gap-5">
      <div className="h-[90%]  flex items-center justify-center">
        <div className="flex gap-3">
          <Counter isFancy={false} />
          <Counter isFancy={false} />
          <div>
            {isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}
          </div>
        </div>
        <div className="ml-5">
          <input type="checkbox" onChange={() => setIsFancy(!isFancy)} />
        </div>
      </div>
      <div className="flex justify-end">
        <Link
          to={"/"}
          className="text-white px-2.5 py-1 mr-5 bg-green-500 w-fit mb-5"
        >
          ⬅️ Goto previous page
        </Link>
      </div>
    </div>
  );
};

export default Index;
