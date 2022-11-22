import React from "react";

const Title = ({title}) => {
  return (
    <div className="top flex justify-between items-center pb-6 px-6">
      <h1 className="text-3xl font-extralight ">{title}</h1>

      <img src="/H1.jpg" className="rounded-full  w-10 h-10" alt="" />
    </div>
  );
};

export default Title;
