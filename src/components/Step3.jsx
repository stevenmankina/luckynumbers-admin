import React from "react";
import { toast } from "react-toastify";

const Step3 = ({ setStep, winning, setWinning, saveGame }) => {
  const handleSave = () => {
    console.log();

    if (winning.win_at > 0 && winning.win_from > 0) {
      if (parseInt(winning.win_at) <= parseInt(winning.win_from)) {
        console.log("Saving");
        saveGame();
      } else {
        toast.error("winning cards should be less than batch size");
      }
    }
  };

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
          className={`px-10 bg-primary-500 py-2 my-3 ${
            winning.win_at > 0 && winning.win_from > 0 ? "" : "bg-primary-300"
          } text-white`}
        >
          CONTINUE &gt;{" "}
        </button>

        <div className="flex justify-evenly">
          <div className="card text-left w-1/4 p-8 rounded-md shadow-md border">
            <p>
              <b>Round 3</b> predetermined winning cards - <b>Full house</b>
            </p>

            <div className=" w-full my-2">
              <div className="w-full  ">
                <p>Winning Cards</p>
                <input
                  className="p-1 w-full border-2 rounded-md border-primary-300 outline-none"
                  type="number"
                  value={winning ? winning.win_at : 0}
                  onChange={(e) =>
                    setWinning({ ...winning, win_at: e.target.value })
                  }
                />
              </div>
              <div className="w-full">
                <p>Card Batch Size </p>
                <input
                  className="p-1 w-full border-2 rounded-md border-primary-300 outline-none"
                  type="number"
                  value={winning ? winning.win_from : 0}
                  onChange={(e) =>
                    setWinning({ ...winning, win_from: e.target.value })
                  }
                />
              </div>
            </div>

            <p className="text-xs leading-5">
              Enter a number for how many winning cards. For example, if 2 is
              entered in Winning card this will generate a winning card every
              10th download of the game card.
            </p>

            <button
              onClick={handleSave}
              className={`px-6 bg-primary-500 py-1 my-3 ${
                winning.win_at > 0 && winning.win_from > 0
                  ? ""
                  : "bg-primary-300"
              } rounded-md text-white`}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
