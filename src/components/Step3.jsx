import React from "react";

const Step1 = ({ setStep }) => {
  return (
    <>
      <div className="p-10">
        <h3 className="text-xl text-primary-500">
          Step 3 - Add number of winning cards per round
        </h3>

        <button
          onClick={() => setStep(4)}
          className="px-10 bg-primary-500 py-2 my-3  text-white"
        >
          CONTINUE &gt;{" "}
        </button>

        <div className="flex justify-evenly">
          <div className="card text-left w-1/4 p-8 rounded-md shadow-md border">
            <p>
              <b>Round 1</b> predetermined winning cards - <b>Corners</b>
            </p>

            <select
              className=" py-1 w-full my-1 border-2 rounded-md border-primary-300 outline-none"
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

            <p className="text-xs leading-5">
              Lorem ipsum dolor sit, amet consectetur inventore id dolorum sequi
              sapiente tempore adipisicing elit. Dicta, adipisci blanditiis.
              Totam animi inventore id dolorum sequi sapiente tempore dolor!
            </p>

            <button className="px-6 bg-primary-500 py-1 my-3 rounded-md text-white">
              Save
            </button>
          </div>
          <div className="card text-left w-1/4 p-8 rounded-md shadow-md border">
            <p>
              <b>Round 2</b> predetermined winning cards - <b>Middle</b>
            </p>

            <select
              className=" py-1 w-full my-1 border-2 rounded-md border-primary-300 outline-none"
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

            <p className="text-xs leading-5">
              Lorem ipsum dolor sit, amet consectetur inventore id dolorum sequi
              sapiente tempore adipisicing elit. Dicta, adipisci blanditiis.
              Totam animi inventore id dolorum sequi sapiente tempore dolor!
            </p>

            <button className="px-6 bg-primary-500 py-1 my-3 rounded-md text-white">
              Save
            </button>
          </div>
          <div className="card text-left w-1/4 p-8 rounded-md shadow-md border">
            <p>
              <b>Round 3</b> predetermined winning cards - <b>Full house</b>
            </p>

            <select
              className=" py-1 w-full my-1 border-2 rounded-md border-primary-300 outline-none"
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

            <p className="text-xs leading-5">
              Lorem ipsum dolor sit, amet consectetur inventore id dolorum sequi
              sapiente tempore adipisicing elit. Dicta, adipisci blanditiis.
              Totam animi inventore id dolorum sequi sapiente tempore dolor!
            </p>

            <button className="px-6 bg-primary-500 py-1 my-3 rounded-md text-white">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
