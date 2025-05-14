import { products } from "../data/data";

const RendringLists = () => {
  return (
    <div className="mb-10">
      <h3 className="font-bold mt-5">Rendring Lists</h3>
      <div>
        <ul>
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
