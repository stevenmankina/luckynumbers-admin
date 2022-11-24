import React, { useEffect, useState } from "react";

const Step1 = ({ setStep }) => {
  const [numbers, setNumbers] = useState({ num: [] });

  const handleAddNo = (e) => {
    let newNums = numbers.num;
    let numToAdd = e.target.value;

    if (!newNums.includes(numToAdd)) {
      newNums.push(numToAdd);
      setNumbers({
        ...numbers,
        num: newNums,
      });
    }
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

        <div className="flex justify-around">
          <div className="flex ">
            <p className="px-3 py-1">Add Number</p>

            <div className="flex-col flex">
              {numbers &&
                numbers.num.map((num) => (
                  <p className="py-1 px-3 border-2 rounded-md" key={num}>
                    {num}
                  </p>
                ))}

              <select
                name="addno"
                onChange={(e) => handleAddNo(e)}
                className=" py-1 px-2 my-1 border-2 rounded-md border-primary-300 outline-none"
                id=""
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          <div className="flex ">
              <p className="px-3">Add Time</p>
            <div className="">

              <input
                type="time"
                className="outline-none border-2 px-1 rounded-md border-primary-300"
                name="date"
                step={1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
