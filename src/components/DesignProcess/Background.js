import React from "react";

const Background = ({ children }) => {
  return (
    <div className=" bg-design-process-bg bg-center bg-cover h-[125vh] w-[62%] flex items-center justify-center">
      {children}
    </div>
  );
};

export default Background;
