import React from "react";

const Step4 = ({ setStep, numbers }) => {
  return (
    <>
      <div className="p-10">
        <h3 className="text-xl text-primary-500">
          Winning numbers have been added!
        </h3>

        <div className="flex border w-fit px-2 my-10 m-auto rounded-md border-primary-500">
          {numbers && numbers.map((num)=>(
            <p className="text-primary-500  p-2">{num.number}</p>
            ))}
            
        </div>

        <button
          onClick={() => setStep(0)}
          className="px-10 border rounded-md border-primary-500 py-2 my-5 text-primary-500"
        >
          VIEW OTHER EPISODES &gt;
        </button>

        <br />
        <button
          onClick={() => setStep(0)}
          className="px-10 bg-primary-500 py-2 my-3  text-white"
        >
          BACK TO DASHBOARD &gt;
        </button>

      </div>
    </>
  );
};

export default Step4;
