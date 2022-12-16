import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getSeconds } from "../util/age";

const Step2 = ({ setStep, numbers, setNumbers, duration }) => {
  const [number, setNumber] = useState(null);
  const [time, setTime] = useState("00:00:00");

  const numbetList = new Array(45).fill(0);

  const [len, setLen] = useState(0);

  // Custom Duration input for cross browser support
  const hrs = new Array(24).fill(0);
  const min = new Array(60).fill(0);
  const sec = new Array(60).fill(0);

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

  // For Lucky Numbers Validation
  // 1. Number should be unique
  // 2. Time Should be less than total duration of game
  // 3. Current time should be greater than previous time. i.e. in ascending order
  const handleAddNo = () => {
    if (number != null && number !== "" && time != null) {
      if (numbers.filter((e) => e.number === number).length === 0) {
        let currSec = getSeconds(time);
        let durationSec = getSeconds(duration);

        if (numbers.length === 0) {
          if (currSec < durationSec) {
            let arr = numbers;
            arr.push({ number, time });
            setNumbers(arr);
            setNumber(null);
            setTime("00:00:00");
            setLen(numbers.length);
            return;
          } else {
            toast.error("time should be less than duration");
          }
        }

        let prevTime = numbers[numbers.length - 1].time;
        let prevSec = getSeconds(prevTime);

        if (prevSec < currSec) {
          if (currSec < durationSec) {
            let arr = numbers;
            arr.push({ number, time });
            setNumbers(arr);
            setNumber(null);
            setTime("00:00:00");
            setLen(numbers.length);
          } else {
            toast.error("time should be less than duration");
          }
        } else {
          toast.error("Time Should be greater than previous number time");
        }
      } else {
        toast.error("Number Already added");
      }
    } else {
      toast.error("Invalid Number or time");
    }
  };

  const handleRemove = (i) => {
    var arr = new Array([]);
    arr = numbers;
    arr.splice(i, 1);
    setNumbers(arr);
    console.log(numbers);
    setLen(numbers.length);
  };

  const handleContinue = () => {
    if (len >= 15) {
      setStep(3);
    }
  };

  useEffect(() => {
    setLen(numbers.length);
  }, [numbers.length]);

  useEffect(() => {
    let newTime = calculateDuration();
    setTime(newTime);
  }, [hours, minutes, seconds]);

  return (
    <>
      <div className="p-10">
        <h3 className="text-xl text-primary-500">
          Step 2 - Add winning numbers & release time
        </h3>

        <button
          onClick={() => setStep(1)}
          className=" border mx-3 px-8 border-primary-500 py-2 my-5 text-primary-500"
        >
          &lt; PREVIOUS
        </button>

        <button
          onClick={handleContinue}
          className={`px-10 bg-primary-500 py-2 my-3 ${
            len < 15 ? "bg-primary-150 text-primary-500" : ""
          } text-white`}
        >
          CONTINUE &gt;{" "}
        </button>

        <div className="flex justify-center ">
          <div className="flex ">
            <p className="px-3  text-primary-500 text-lg">Add Number</p>

            <div className="flex-col flex">
              {len > 0 &&
                numbers.map((obj) => (
                  <p className="py-1 px-3 border-2 rounded-md" key={obj.number}>
                    {obj.number}
                  </p>
                ))}

              <select
                name="addno"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className=" py-1 px-2 my-1 border-2 rounded-md border-primary-300 outline-none"
                id=""
              >
                <option value={null}></option>

                {numbetList.map((num, i) => (
                  <option value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex">
            <p className="px-3 text-primary-500 text-lg">Add Time</p>

            <div className=" flex flex-col">
              {len > 0 &&
                numbers.map((obj, i) => (
                  <div className="flex items-center" key={obj.number}>
                    <p className="py-1 w-full px-5 border-2 rounded-md">
                      {obj.time.slice(3,8) }
                    </p>
                    <p
                      className=" px-3  rounded-md cursor-pointer"
                      onClick={() => handleRemove(i)}
                    >
                      X
                    </p>
                  </div>
                ))}

              <div className="flex">
                <div className="">
                  <select
                    name="mins"
                    value={minutes}
                    onChange={(e) => {
                      setMinutes(e.target.value);
                    }}
                    className=" py-1 px-2 border-2 mt-1 rounded-md border-primary-300 outline-none"
                    id=""
                  >
                    {min.map((num, i) => (
                      <option value={i}>{i}</option>
                      ))}
                  </select>
                      <p className="text-xs">Minutes</p>
                </div>
                <div className="">

                  <select
                    name="sec"
                    value={seconds}
                    onChange={(e) => {
                      setSeconds(e.target.value);
                    }}
                    className=" py-1 px-2 mt-1 border-2 rounded-md border-primary-300 outline-none"
                    id=""
                  >
                    {sec.map((num, i) => (
                      <option value={i}>{i}</option>
                      ))}
                  </select>
                      <p className="text-xs">Seconds</p>
                </div>
                <p className=" px-4  rounded-md"></p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleAddNo()}
          className="px-32 bg-primary-500 py-2 my-3  text-white"
        >
          ADD &gt;{" "}
        </button>
      </div>
    </>
  );
};

export default Step2;
