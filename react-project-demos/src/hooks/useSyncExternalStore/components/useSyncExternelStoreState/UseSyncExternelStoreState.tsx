import { useSyncExternalStore } from "react";

let score = 0;
let handleCallbackExternerlStore = null;
const UseSyncExternelStoreState = () => {
  const updatedValue = useSyncExternalStore(handleSubscribe, handleReturnValue);

  function handleSubscribe(callback) {
    handleCallbackExternerlStore = callback;
  }
  function handleReturnValue() {
    return score;
  }

  function handleIncrementScore() {
    score++;
    handleCallbackExternerlStore();
  }

  return (
    <div>
      <div className="text-center text-[18px] mt-10 font-normal">
        Externel varibale score updation with useSyncExternelStore:{" "}
        <span className="text-center text-amber-700 font-medium"> {score}</span>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleIncrementScore}
          className="mt-3 text-[18px] border-1 px-3 py-1 rounded-[5px] bg-fuchsia-900 text-white cursor-pointer"
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default UseSyncExternelStoreState;
