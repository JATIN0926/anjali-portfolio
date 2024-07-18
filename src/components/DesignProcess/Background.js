import React from "react";

const Background = ({ children }) => {
  return (
    <div className=" bg-design-process-bg bg-center bg-cover h-[98vh] w-[48%] flex items-center justify-center">
      {children}
    </div>
  );
};

export default Background;
