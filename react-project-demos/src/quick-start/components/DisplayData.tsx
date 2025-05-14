import user from "../data/data";

const DisplayData = () => {
  const { name, imageSize, imageUrl } = user;
  return (
    <div>
      <h3 className="font-bold mb-2">Display Data</h3>
      <div className="flex">
        <img
          src={imageUrl}
          className="rounded-[50%]"
          alt="image is not loaded"
          width={imageSize}
        />
        <div className="flex items-center">
          <p className="ml-5">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
