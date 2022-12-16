import React, { useEffect, useState } from "react";

const Step1 = ({ setStep, datetime, setDatetime, setDuration, duration }) => {
  const hrs = new Array(24).fill(0);
  const min = new Array(60).fill(0);
  const sec = new Array(60).fill(0);

  // Custom Duration input for cross browser support
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateDuration = () => {
    let hrs = "00";
    let mins = "00";
    let secs = "00";

    if (hours / 10 < 1) {
      hrs = `0${hours}`;
    } else {
      hrs = `${hours}`;
    }

    if (minutes / 10 < 1) {
      mins = `0${minutes}`;
    } else {
      mins = `${minutes}`;
    }

    if (seconds / 10 < 1) {
      secs = `0${seconds}`;
    } else {
      secs = `${seconds}`;
    }

    let d = hrs + ":" + mins + ":" + secs;
    return d;
  };

  const handleContinue = () => {
    if (datetime !== null && duration != null) {
      setStep(2);
    }
  };

  useEffect(() => {
    let newDuration = calculateDuration();
    setDuration(newDuration);
  }, [hours, minutes, seconds]);

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
          datetime === null || duration === "00:00:00"
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

          <select
            name="addno"
            value={hours}
            onChange={(e) => {
              setHours(e.target.value);
            }}
            className=" py-1 px-2 my-1 border-2 rounded-md border-primary-300 outline-none"
            id=""
          >
            {hrs.map((num, i) => (
              <option value={i}>{i}</option>
            ))}
          </select>

          <select
            name="addno"
            value={minutes}
            onChange={(e) => {
              setMinutes(e.target.value);
            }}
            className=" py-1 px-2 my-1 border-2 rounded-md border-primary-300 outline-none"
            id=""
          >
            {min.map((num, i) => (
              <option value={i}>{i}</option>
            ))}
          </select>

          <select
            name="addno"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            className=" py-1 px-2 my-1 border-2 rounded-md border-primary-300 outline-none"
            id=""
          >
            {sec.map((num, i) => (
              <option value={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Step1;
