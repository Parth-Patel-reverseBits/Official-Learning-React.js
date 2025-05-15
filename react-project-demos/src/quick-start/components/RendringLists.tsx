import { products } from "../data/data";

const RendringLists = () => {
  return (
    <div className="mb-10">
      <h3 className="font-bold mt-5">Rendring Lists</h3>
      <div>
        <ul className="h-60 overflow-auto border-2 px-3 rounded-2xl">
          {products.map((item) => {
            return (
              <li>
                {item.id}. {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RendringLists;
