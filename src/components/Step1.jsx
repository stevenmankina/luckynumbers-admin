import React, { useEffect, useState } from "react";

const Step1 = ({ setStep, datetime, setDatetime }) => {

  const handleContinue = () => {

    if(datetime !== null) {
      setStep(2);
    }

  }
  
  return (
    <div className="p-10">
      <h3 className="text-xl text-primary-500">
        Step 1 - Add Date & Time of upcoming episode
      </h3>
      <button
          onClick={() => setStep(0)}
          className=" border mx-3 px-8 border-primary-500 py-2 my-5 text-primary-500"
        >
          &lt; DASHBOARD
        </button>

      <button
        onClick={handleContinue}
        className={`px-10 bg-primary-500 py-2 my-3 ${datetime === null ? 'bg-primary-150 text-primary-500' : ''} text-white`}
      >
        CONTINUE &gt;
      </button>

      <div className="flex mt-5 justify-around">
        <div className="">

        <input
          type="datetime-local"
          onChange={(e) => setDatetime(e.target.value)}
          value={datetime}
          className="outline-none border p-1 rounded-sm border-primary-500  "
          name="date"
          step={1}
          />

        <button
          onClick={handleContinue}
          className="px-10 bg-primary-500 py-1 mx-4 text-white"
          >
          Save
        </button>
            </div>

        

      </div>
    </div>
  );
};

export default Step1;
