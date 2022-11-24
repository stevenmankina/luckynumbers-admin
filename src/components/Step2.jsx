import React from "react";

const Step1 = ({ setStep }) => {
  return (
    <>
      <div className="p-10">
        <h3 className="text-xl text-primary-500">
          Step 2 - Add winning numbers & release time
        </h3>

        <button
          onClick={() => setStep(3)}
          className="px-10 bg-primary-500 py-2 my-3  text-white"
        >
          CONTINUE &gt;{" "}
        </button>
      </div>
    </>
  );
};

export default Step1;
