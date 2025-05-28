import { useActionState } from "react";
import NavigationButton from "../../GlobalComponents/NavigationButton";

const Index = () => {
  const [data, action, isPending] = useActionState(formState, undefined);

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="absolute top-20 text-3xl font-medium">
        useActionState Demo
      </h1>
      <form action={action} className="flex flex-col gap-3">
        <input
          id="name"
          name="name"
          className=" border-2 font-mono px-2 focus:border-2 focus:outline-0"
          type="text"
        />
        <button
          disabled={isPending}
          className="cursor-pointer transition-all duration-100 py-1.5 rounded-[10px] bg-green-500 text-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          Submit
        </button>
        <span className="text-red-500">{data?.error && data.error}</span>
        <span className="text-green-500">{data?.message && data.message}</span>
      </form>
      {/* <NavigationButton /> */}
    </div>
  );
};

export default Index;
async function formState(previousState: string, formData: FormData) {
  const name = formData.get("name");
  if (name.length === 0) {
    return { error: "Field is empty" };
  }
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { message: "User saved" };
}
