import { useActionState } from "react";
import NavigationButton from "../../GlobalComponents/NavigationButton";

const Index = () => {
  function increment(previousState: number, formData: FormData): number {
    return previousState + 1;
  }

  const [state, formAction] = useActionState<number, FormData>(increment, 0);

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="absolute top-20 text-3xl font-medium">
        useActionState Demo
      </h1>
      <form>
        <p className="text-center text-3xl mb-3">{state}</p>
        <button
          className="bg-orange-400 text-white font-medium px-3 py-2 rounded-2xl cursor-pointer"
          type="submit"
          formAction={formAction}
        >
          Increment
        </button>
      </form>
      <NavigationButton />
    </div>
  );
};

export default Index;
