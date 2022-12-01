import React from "react";

const Step3 = ({ setStep, winning, setWinning, saveGame }) => {

  const handleSave = async () => {
    if(winning.win_at > 0  && winning.win_from > 0) { 
      if(winning.win_at <= winning.win_from) {
        await saveGame();
      }
    }
  }


  return (
    <>
      <div className="p-10">
        <h3 className="text-xl text-primary-500">
          Step 3 - Add number of winning cards per round
        </h3>

        <button
          onClick={() => setStep(2)}
          className=" border mx-3 px-8 border-primary-500 py-2 my-5 text-primary-500"
        >
          &lt; PREVIOUS
        </button>

        <button
          onClick={() => handleSave()}
          className={`px-10 bg-primary-500 py-2 my-3 ${(winning.win_at > 0  && winning.win_from > 0) ? "":"bg-primary-300"} text-white`}
        >
          CONTINUE &gt;{" "}
        </button>

        <div className="flex justify-evenly">
          <div className="card text-left w-1/4 p-8 rounded-md shadow-md border">
            <p>
              <b>Round 3</b> predetermined winning cards - <b>Full house</b>
            </p>

            <div className="flex w-full my-2">
              <div className="w-1/2  ">
                <p>Win At</p>
                <input
                  className="p-1 w-full border-2 rounded-md border-primary-300 outline-none"
                  type="number"
                  value={winning ? winning.win_at : 0}
                  onChange={(e)=>setWinning({...winning, win_at: e.target.value})}
                />
              </div>
              <div className="w-1/2">
              <p>Win From</p>
                <input
                  className="p-1 w-full border-2 rounded-md border-primary-300 outline-none"
                  type="number"
                  value={winning ? winning.win_from  : 0}
                  onChange={(e)=>setWinning({...winning, win_from: e.target.value})}
                />
              </div>
            </div>

            {/* <select
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
            </select> */}

            <p className="text-xs leading-5">
              Lorem ipsum dolor sit, amet consectetur inventore id dolorum sequi
              sapiente tempore adipisicing elit. Dicta, adipisci blanditiis.
              Totam animi inventore id dolorum sequi sapiente tempore dolor!
            </p>

            <button onClick={handleSave} className={`px-6 bg-primary-500 py-1 my-3 ${(winning.win_at > 0  && winning.win_from > 0) ? "":"bg-primary-300"} rounded-md text-white`}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
