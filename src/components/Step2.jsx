import React, { useEffect, useState } from "react";

const Step1 = ({ setStep, numbers, setNumbers}) => {

  const [number, setNumber] = useState(null);
  const [time, setTime] = useState("00:00:00");


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

        <div className="flex justify-center items-center">
          <div className="flex ">
            <p className="px-3 py-1">Add Number</p>

            <div className="flex-col flex">
              {len > 0 && numbers.map((obj) => (
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
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>
          <div className="flex ">
            <p className="px-3">Add Time</p>

            <div className=" flex flex-col">
              {len > 0 && numbers.map((obj) => (
                  <p className="py-1 px-3 border-2 rounded-md" key={obj.number}>
                    {obj.time}
                  </p>
                ))}
                
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="outline-none border-2 py-1 px-2 my-1 rounded-md border-primary-300"
                name="date"
                step={1}
              />
            </div>
            <div className=" flex flex-col">
              {len > 0 && numbers.map((obj, i) => (
                  <p className="py-1 px-3 rounded-md cursor-pointer" onClick={()=>handleRemove(i)} key={obj.number}>
                    X
                  </p>
                ))}

              
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

export default Step1;
