import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../util/config";

import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const EditTimestamp = ({ setTimePopup, game, getAllGames }) => {
  const { isLoggedIn, resetUser, userToken } = useContext(AuthContext);
  const [time, setTime] = useState("");

  const updateGame = async () => {
    try {
      let url = `${BASE_URL}/game/${game._id}/schedule/update`;

      let data = {
        starts_at: time,
        duration: game.duration
      };

      let res = await axios.patch(url, data, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      if (res.status === 200) {
        toast.success(res.data.message);
        setTimePopup(false);
        getAllGames();
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

  useEffect(() => {
    console.log(game?.starts_at);
    setTime((game?.starts_at).slice(0, 19));
  }, []);

  return (
    <>
      <div className=" w-10/12  h-full fixed flex justify-center items-center bg-black bg-opacity-30">
        <div className="p-6 relative bg-white w-1/2 h-fit  rounded">
          <p
            className="absolute top-0 cursor-pointer right-2"
            onClick={() => setTimePopup(false)}
          >
            X
          </p>

          <p className="font-semibold text-purple-500 text-lg ">
            Edit Start Time
          </p>

          <input
            className="outline-none border p-1 rounded-md border-primary-500"
            type="datetime-local"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button
          onClick={updateGame}
            className="px-3 mx-3 mt-5 py-1 rounded cursor-pointer text-white bg-primary-500"
          >
            Edit Time
          </button>
        </div>
      </div>
    </>
  );
};

export default EditTimestamp;
