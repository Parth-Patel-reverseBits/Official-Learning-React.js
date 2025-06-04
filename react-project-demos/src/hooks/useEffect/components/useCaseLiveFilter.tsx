import { useEffect, useState } from "react";
import { marvelCharacters } from "../data/marvelCharacters";
const useCaseLiveFilter = () => {
  const [text, setText] = useState("");
  const [filterDarray, setFilterDarray] = useState([]);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const filtered = marvelCharacters.filter((item) =>
      item.name
        .replace(" ", "")
        .toLowerCase()
        .includes(text.replace(" ", "").toLowerCase())
    );
    setFilterDarray(filtered);
  }, [text]);

  return (
    <div>
      <div className="flex justify-center mb-10 ">
        <input
          type="text"
          className="tracking-[0.9px] font-medium w-[30%] border-2 focus:outline-0 rounded-3xl px-3 py-1 placeholder:italic"
          placeholder="Write character name to filter..."
          onChange={(e) => handleChangeText(e)}
        />
      </div>

      <div className="w-full text-center flex justify-center mb-10">
        <table className="w-[80%]">
          <thead className="border-3">
            <th>Name</th>
            <th>Age</th>
            <th>Description</th>
          </thead>
          <tbody>
            {filterDarray.map((item) => (
              <tr className="border-2" key={item?.key}>
                <td className="w-[33%]">{item?.name}</td>
                <td className="w-[33%]">{item?.age}</td>
                <td className="w-[33%]">{item?.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default useCaseLiveFilter;
