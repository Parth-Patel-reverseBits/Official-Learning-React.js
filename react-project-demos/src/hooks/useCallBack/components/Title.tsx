import React from "react";

const Title = () => {
  return (
    <h1 className="text-center font-bold mt-10 mb-10 text-2xl">
      useCallback Demo
    </h1>
  );
};

export default React.memo(Title);
