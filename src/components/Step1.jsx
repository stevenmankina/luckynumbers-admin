import React, { useEffect, useState } from "react";

const Step1 = ({ setStep }) => {
  const date = new Date();

  const todayDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const [today, setToday] = useState(todayDate);

  useEffect(() => {
    console.log(today);
  }, [today]);

  return (
    <div className="p-10">
      <h3 className="text-xl text-primary-500">
        Step 1 - Add Date & Time of upcoming episode
      </h3>

      <button
        onClick={() => setStep(2)}
        className="px-10 bg-primary-500 py-2 my-3  text-white"
      >
        CONTINUE &gt;
      </button>

      <div className="flex mt-5 justify-around">
        <div className="">

        <input
          type="date"
          onChange={(e) => setToday(e.target.value)}
          value={today}
          className="outline-none border p-1 rounded-sm border-primary-500  "
          name="date"
          id=""
          />

        <button
          onClick={() => setStep(2)}
          className="px-10 bg-primary-500 py-1 mx-4 text-white"
          >
          Save
        </button>
            </div>

        

        <input
          type="time"
          className="outline-none border p-1 rounded-sm border-primary-500"
          name="date"
          step={1}
        />
      </div>
    </div>
  );
};

export default Step1;
