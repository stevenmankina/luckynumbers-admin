import React from "react";

const Step1 = ({ setStep, datetime, setDatetime, setDuration, duration }) => {
  const handleContinue = () => {
    if (datetime !== "") {
      setStep(2);
    }
  };

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
        className={`px-10 bg-primary-500 py-2 my-3 ${
          datetime === ""
            ? "bg-primary-150 text-primary-500"
            : ""
        } text-white`}
      >
        CONTINUE &gt;
      </button>

      <div className="flex mt-5 justify-around">
        <div className="">
          <p className="m-2">Start Time</p>
          <input
            type="datetime-local"
            onChange={(e) => setDatetime(e.target.value)}
            value={datetime}
            className="outline-none border p-1 rounded-sm border-primary-500  "
            name="date"
            step={1}
          />

          <p className="m-2 mt-3">Duration</p>

          <button
            onClick={() => setDuration("01:00:00")}
            className={` ${
              duration === "01:00:00"
                ? "shadow bg-primary-500 font-semibold text-white"
                : ""
            }  border-primary-500 w-20 rounded py-2 mx-1 border`}
          >
            1 Hr
          </button>
          <button
          onClick={() => setDuration("00:30:00")}
            className={` ${
              duration === "00:30:00"
                ? "shadow bg-primary-500 font-semibold text-white"
                : ""
            }  border-primary-500 py-2 w-20 rounded mx-1 border`}
          >
            30 Min
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
