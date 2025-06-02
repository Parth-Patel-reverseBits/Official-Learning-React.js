import { useDeferredValue, useEffect, useState } from "react";

const Index = () => {
  const [input, setInput] = useState<string>("");
  const deferredValue = useDeferredValue(input);
  const [jsonData, setJsonData] = useState([]);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log("Fetched JSON:", json);
        setJsonData((prevData) => [...prevData, ...json]);
      })
      .catch((err) => console.error("Fetch error:", err));
  };

  useEffect(() => {
    if (deferredValue) {
      fetchData();
    }
  }, [deferredValue]);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-center font-semibold text-3xl">useDeferredValue</h1>
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <input
          placeholder="write something here...!"
          className="border-3 w-[80%] px-3 py-1 rounded-2xl placeholder:italic"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="overflow-hidden border-3 w-[60%] rounded-2xl p-2 ">
          <ul className="overflow-auto h-100 w-[100%]">
            <p className="absolute end-10">
              FetchedData length: {jsonData.length}
            </p>
            {jsonData.map((item, index) => (
              <li key={index}>{item?.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
