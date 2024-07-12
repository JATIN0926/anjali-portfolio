import React from "react";

const Background = ({ children }) => {
  return (
    <div className=" bg-design-process-bg bg-center bg-cover h-[95vh] w-[45vw] flex items-center justify-center">
      {children}
    </div>
  );
};

export default Background;
