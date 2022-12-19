import React, { useEffect, useState } from "react";
import WinningNumbers from "./WinningNumbers";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../util/config";
import { getDate, getTime } from "../util/age";
import EditTimestamp from "./EditTimestamp";
import moment from "moment";
import { dateFormat } from "../util/constants";

const Step0 = ({ setStep, getAllGames, games }) => {
  const { resetUser } = useContext(AuthContext);

  const [numbers, setNumbers] = useState([5, 8, 9, 7, 6]);
  const [popup, setPopup] = useState(false);
  const [game, setGame] = useState(null);
  const [timePopup, setTimePopup] = useState(false);

  const deleteGame = async (gameId) => {
    try {
      let url = `${BASE_URL}/game/${gameId}/delete`;

      let res = await axios.delete(url);
      if (res.status === 200) {
        await getAllGames();
        toast.success("Game Deleted Successfully");
      }
    } catch (error) {
      let status = error.response.status;
      if (status === 401 || status === 403) {
        resetUser();
        toast.error("You are not authenticated");
      } else if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Some Unknown Error Occured");
      }
    }
  };

  // invokes getAllGame function when page loads
  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <>
      <div className="relative">
        {popup && <WinningNumbers numbers={numbers} setPopup={setPopup} />}
      </div>
      <div className="relative">
        {timePopup && (
          <EditTimestamp
            setTimePopup={setTimePopup}
            game={game}
            getAllGames={getAllGames}
          />
        )}
      </div>

      <div className="p-10">
        <h3 className="text-4xl pb-5 text-primary-500">Saved Episodes</h3>
        <h3 className="text-xl my-7 text-primary-500">Saved Winning Numbers</h3>

        <button
          onClick={() => setStep(1)}
          className="px-10  bg-primary-500 py-2 mb-5 mx-16 float-right uppercase text-white"
        >
          Add New Show &gt;
        </button>

        <table className="md:table-auto w-11/12 m-auto ">
          <thead className="bg-neutral-100">
            <tr className="font-thin uppercase outline-1 outline-gray-200 outline rounded-sm">
              <th className="p-3 font-normal">Episode</th>
              <th className="p-3 max-md:hidden font-normal">Date</th>
              <th className="p-3 max-md:hidden font-normal">Time</th>
              <th className="p-3 max-md:hidden font-normal">Winning Numbers</th>
              <th className="p-3 max-md:hidden font-normal">Remove Show</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, index) => (
              <tr
                key={game._id}
                className="outline-1 outline-gray-200 outline rounded-sm "
              >
                <td className="text-sm p-3 max-md:hidden">{index + 1}</td>
                <td
                  onClick={() => {
                    setGame(game);
                    setTimePopup(true);
                  }}
                  className="text-sm cursor-pointer text-primary-500 max-md:hidden"
                >
                  {moment(game.starts_at).format(dateFormat)}
                </td>
                <td
                  onClick={() => {
                    setGame(game);
                    setTimePopup(true);
                  }}
                  className="text-sm cursor-pointer text-primary-500 max-md:hidden"
                >
                  {getTime(game.starts_at)}
                </td>
                <td
                  onClick={() => {
                    setPopup(true);
                    setNumbers(game.win_array);
                  }}
                  className="text-base cursor-pointer text-primary-500 max-md:hidden"
                >
                  view
                </td>
                <td className="text-sm  max-md:hidden">
                  {" "}
                  <p
                    className="cursor-pointer w-fit m-auto"
                    onClick={() => deleteGame(game._id)}
                  >
                    {" "}
                    X
                  </p>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Step0;
