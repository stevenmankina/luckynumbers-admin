import axios from "axios";
import React from "react";
import { useState } from "react";
import { BASE_URL } from "../util/config";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const AddAdvert = ({ setAdvertPopup, sid, getSponsor }) => {
  const { resetUser, userToken } = useContext(AuthContext);

  const [media, setMedia] = useState(null);
  const [startAt, setStartAt] = useState(null);
  const [duration, setDuration] = useState(null);

  const handleAddAdvert = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("advertImage", media);
    data.append("duration", duration);
    data.append("startAt", startAt);

    try {
      let url = `${BASE_URL}/advert/${sid}/add`;

      let res = await axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + userToken,
        },
      });

      if (res.status === 200) {
        getSponsor();

        setAdvertPopup(false);
        toast.success("Advert Added Successfully");
      }
    } catch (error) {
      let status = error.response.status;
      if (status === 401 || status === 403) {
        toast.error("You are not authenticated");
        resetUser();
      } else if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Some Unknown Error Occured");
      }
    }
  };

  return (
    <>
      <div className="  md:w-1/3 w-full md:p-10 p-2">
        <div className="bg-secondary-100 relative text-center w-full p-7">
          <p
            onClick={() => setAdvertPopup(false)}
            className="absolute cursor-pointer top-3 right-4"
          >
            X
          </p>

          <img src={media ? URL.createObjectURL(media) : ""} alt="" />
          
          <form onSubmit={(e) => handleAddAdvert(e)}>
            <p className="text-left mt-3 font-semibold">Upload Image</p>

            <input
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              type="file"
              accept="image/*"
              onChange={(e) => setMedia(e.target.files[0])}
              required
            />
            <p className="text-left text-xs">Max file size should be 1 MB</p>


            <p className="text-left mt-3 font-semibold">Start At</p>
            <input
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              type="datetime-local"
              name="startAt"
              value={startAt}
              onChange={(e) => setStartAt(e.target.value)}
              required
            />

            <p className="text-left mt-3 font-semibold">Ends At</p>
            <input
              className="px-2 py-1 mt-1 w-full border outline-none rounded-md"
              type="datetime-local"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />

            <button
              type="submit"
              className="px-3 mx-3 mt-5 py-1 rounded cursor-pointer text-white bg-primary-500"
            >
              Add Advert
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAdvert;
