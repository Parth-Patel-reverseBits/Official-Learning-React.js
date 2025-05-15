import { products } from "../data/data";

const RendringLists = () => {
  return (
    <div className="mb-10">
      <h3 className="font-bold mt-5">Rendring Lists</h3>
      <div className="border-2 rounded-2xl overflow-hidden">
        <ul className="h-60 overflow-y-auto  px-3">
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
