import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Step2 = ({ setStep, numbers, setNumbers }) => {
  const [number, setNumber] = useState(null);
  const [time, setTime] = useState("00:00:00");

  const numbetList = new Array(45).fill(0);

  const [len, setLen] = useState(0);

  const handleAddNo = () => {
    console.log(numbers.filter((e) => e.number === number).length);

    if (number != null && number !== "" && time != null) {
      if (numbers.filter((e) => e.number === number).length === 0) {
        let arr = numbers;
        arr.push({ number, time });
        setNumbers(arr);
        setNumber(null);
        setTime("00:00:00");
        setLen(numbers.length);
      }
    } else {
      toast.error("Number Already added");
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
    if(len >= 15) {
      setStep(3);
    }
  }

  useEffect(() => {
    setLen(numbers.length);
  }, [numbers.length])
  

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
          className={`px-10 bg-primary-500 py-2 my-3 ${len < 15 ? 'bg-primary-150 text-primary-500' : ''} text-white`}
        >
          CONTINUE &gt;{" "}
        </button>

        <div className="flex justify-center items-center">
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
          <div className="flex ">
            <p className="px-3 text-primary-500 text-lg">Add Time</p>

            <div className=" flex flex-col">
              {len > 0 &&
                numbers.map((obj, i) => (
                  <div className="flex items-center" key={obj.number}>
                    <p className="py-1 w-full px-5 border-2 rounded-md">
                      {obj.time}
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
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="outline-none border-2 py-1 px-2 my-1 rounded-md border-primary-300"
                  name="date"
                  step={1}
                />
                <p className=" px-4  rounded-md cursor-pointer"></p>
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
