import React, { useState } from "react";

const Stepper = ({step}) => {

  return (
    <>

      <h2 className="text-4xl text-primary-500 font-light my-8">Pre-determined winning cards</h2>

      <div className="flex justify-center items-center">
        <div
          className={`step h-16 w-5 rounded-full border-2 ${
            step === 1 ? "bg-primary-500" : ""
          } border-primary-500`}
        ></div>
        <div className="w-20 h-6 bg-neutral-300"></div>
        <div
          className={`step h-16 w-5 rounded-full border-2 ${
            step === 2 ? "bg-primary-500" : ""
          } border-primary-500`}
        ></div>
        <div className="w-20 h-6 bg-neutral-300"></div>
        <div
          className={`step h-16 w-5 rounded-full border-2 ${
            step === 3 ? "bg-primary-500" : ""
          } border-primary-500`}
        ></div>
        <div className="w-20 h-6 bg-neutral-300"></div>
        <div
          className={`step h-16 w-5 rounded-full border-2 ${
            step === 4 ? "bg-primary-500" : ""
          } border-primary-500`}
        ></div>
      </div>
    </>
  );
};

export default Stepper;
