import { useState } from "react";
import LogIn from "./LogIn";
import LogOut from "./LogOut";

const ConditionalRendring = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div>
      <h3 className="font-bold mb-2 mt-10">
        Conditional Rendring + Responding to events + Updating the screen
      </h3>
      <div className="flex gap-3">
        <button
          onClick={() => setIsLoggedIn(true)}
          className="bg-blue-500 text-white p-2.5 cursor-pointer"
        >
          Log In
        </button>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-red-500 text-white p-2.5 cursor-pointer"
        >
          Log Out
        </button>
      </div>
      <div>{isLoggedIn ? <LogIn /> : <LogOut />}</div>
    </div>
  );
};

export default ConditionalRendring;
